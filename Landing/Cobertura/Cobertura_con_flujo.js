import { useState, useRef, useEffect } from 'react';

import { useAuthContext } from '@/context/authContext';
import './Cobertura.scss';

import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import { Polygon } from './circulo';
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

// ============================================================
// POLÍGONO REAL DE COBERTURA — heredado del código anterior.
// Cerrado explícitamente (primer punto === último) para que
// containsLocation funcione bien en el borde.
// ============================================================
const COVER = [
  { lat: -12.071775, lng: -77.127376 },
  { lat: -12.050166012430507, lng: -77.12321506194232 },
  { lat: -12.038534368978064, lng: -77.04307515149316 },
  { lat: -12.042156223443866, lng: -77.03263247775908 },
  { lat: -12.044691206072324, lng: -77.01860092752652 },
  { lat: -12.040068979242449, lng: -77.01440146938337 },
  { lat: -12.036134638578853, lng: -77.00749458554263 },
  { lat: -12.042318909975238, lng: -76.9869421953882 },
  { lat: -12.056883818600367, lng: -76.96910095272972 },
  { lat: -12.063516949630726, lng: -76.9406387898395 },
  { lat: -12.082228713133365, lng: -76.93482507680285 },
  { lat: -12.117424586830495, lng: -76.93835277213725 },
  { lat: -12.106948284912896, lng: -76.96659496993122 },
  { lat: -12.149492339619586, lng: -76.98526687489377 },
  { lat: -12.151039653870129, lng: -77.02450049768188 },
  { lat: -12.144791188231787, lng: -77.02546162670896 },
  { lat: -12.134336752232585, lng: -77.02972141600992 },
  { lat: -12.109753098397164, lng: -77.05519476345135 },
  { lat: -12.099267229821463, lng: -77.07202239891171 },
  { lat: -12.071775, lng: -77.127376 } // cierre del anillo
];

const DEFAULT_CENTER = { lat: -12.080827968350965, lng: -77.0281646638726 };

// La clave va en variable de entorno, NUNCA escrita a mano en el código.
// Configúrala en .env.local como NEXT_PUBLIC_MAPS_KEY y restríngela por
// dominio y por API en Google Cloud Console.
const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY;

// Número de WhatsApp de Allpa (reemplazar por el real, formato internacional
// sin + ni espacios, ej: 51999888777).
const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '';

// ============================================================
// Estados del flujo comercial:
//   'idle'    → aún no busca nada
//   'inside'  → dentro de cobertura → vende
//   'outside' → fuera → retiene (captura correo)
//   'error'   → dirección no resuelta
// ============================================================

const Cobertura = () => {
  const { coberturaModal, coberturaHandleClose } = useAuthContext();

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [center, setCenter] = useState(DEFAULT_CENTER);
  const [status, setStatus] = useState('idle');
  const [district, setDistrict] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  // Verifica un punto contra el polígono real. Única fuente de verdad.
  const verifyPoint = (latLng, districtName) => {
    if (!window.google?.maps?.geometry) return;
    const poly = new window.google.maps.Polygon({ paths: COVER });
    const inside = window.google.maps.geometry.poly.containsLocation(latLng, poly);
    setDistrict(districtName || '');
    setStatus(inside ? 'inside' : 'outside');
  };

  // Extrae el distrito del resultado del geocoder / place.
  const extractDistrict = (place) => {
    const comp = place?.address_components || [];
    const found = comp.find(
      (c) =>
        c.types.includes('locality') ||
        c.types.includes('sublocality') ||
        c.types.includes('administrative_area_level_2')
    );
    return found?.long_name || place?.name || 'tu zona';
  };

  // Cuando el usuario elige una dirección del autocompletado.
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    if (!place?.geometry?.location) {
      setStatus('error');
      return;
    }
    const loc = place.geometry.location;
    setCenter({ lat: loc.lat(), lng: loc.lng() });
    verifyPoint(loc, extractDistrict(place));
  };

  // Cuando el usuario arrastra el pin manualmente.
  const handleDragEnd = () => {
    if (!marker?.position) return;
    setCenter({ lat: marker.position.lat, lng: marker.position.lng });
    // Sin geocodificación inversa aquí: mostramos "tu zona" genérico.
    verifyPoint(marker.position, 'tu zona');
  };

  // Mensajes de WhatsApp según el origen.
  const waLink = (msg) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  const waInside = waLink(
    `Hola, quiero un plan de Allpa Food. Mi zona es ${district} y confirmé que tienen cobertura.`
  );
  const waBorder = waLink(
    `Hola, verifiqué ${district} y me dice que no hay cobertura, ¿pueden confirmar?`
  );

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: enviar el correo a tu backend / servicio de captura.
    // Aquí solo marcamos como enviado en la UI.
    setEmailSent(true);
  };

  // Reinicia el flujo al cerrar el modal.
  const handleClose = () => {
    setStatus('idle');
    setDistrict('');
    setEmail('');
    setEmailSent(false);
    coberturaHandleClose();
  };

  if (!MAPS_KEY) {
    // Failsafe: si no hay clave / Maps no carga, degradar a texto + WhatsApp.
    return (
      <Modal open={coberturaModal} onClose={handleClose}>
        <div className="coberturaBox coberturaFallback">
          <div className="coberturaClose" onClick={handleClose}>
            <CloseIcon />
          </div>
          <h3>Verifica tu cobertura</h3>
          <p>
            Hacemos delivery en gran parte de Lima. Escríbenos tu dirección
            por WhatsApp y te confirmamos al instante.
          </p>
          <a className="ctaWhatsapp" href={waLink('Hola, quiero saber si llegan a mi zona.')} target="_blank" rel="noopener noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </Modal>
    );
  }

  return (
    <div className="inlineFlex coberturaCont">
      <Modal
        open={coberturaModal}
        onClose={handleClose}
        aria-labelledby="cobertura-title"
      >
        <div className="coberturaBox">
          <div className="coberturaClose" onClick={handleClose}>
            <CloseIcon />
          </div>

          <APIProvider apiKey={MAPS_KEY} libraries={['places', 'geometry']}>
            <Map
              mapId={'bf51a910020fa25a'}
              className={'ubiPageMapApiStyle'}
              defaultZoom={12.5}
              defaultCenter={DEFAULT_CENTER}
              center={center}
              gestureHandling={'cooperative'}
              disableDefaultUI={true}
            >
              <AdvancedMarker
                draggable={true}
                ref={markerRef}
                position={center}
                onDragEnd={handleDragEnd}
              />
              <Polygon
                paths={COVER}
                strokeColor="#3cfb9f"
                strokeOpacity={0.8}
                fillColor={'#3cfb9f'}
                strokeWeight={3}
                fillOpacity={0.2}
              />
            </Map>

            <MapControl position={ControlPosition.TOP_LEFT} width={'100%'}>
              <div className="searchMapBox">
                <PlaceAutocomplete onPlaceSelect={handlePlaceSelect} />
              </div>
            </MapControl>

            <MapHandler place={selectedPlace} marker={marker} />
          </APIProvider>

          {/* ============ TARJETA DE RESULTADO — el flujo comercial ============ */}
          <div className="coberturaResult" aria-live="polite">
            {status === 'idle' && (
              <p className="resultHint">Verifica si llegamos a tu zona.</p>
            )}

            {status === 'error' && (
              <p className="resultError">
                No encontramos esa dirección. Intenta con una calle o distrito.
              </p>
            )}

            {status === 'inside' && (
              <div className="resultCard resultInside">
                <strong>¡Sí llegamos a {district}!</strong>
                <span>Tu zona tiene cobertura. Elige tu plan y recibe desde esta semana.</span>
                <a className="ctaBuy" href="#planes" onClick={handleClose}>
                  Ver planes con delivery a mi zona →
                </a>
                <a className="ctaWhatsappGhost" href={waInside} target="_blank" rel="noopener noreferrer">
                  O pídelo por WhatsApp
                </a>
              </div>
            )}

            {status === 'outside' && (
              <div className="resultCard resultOutside">
                <strong>Todavía no llegamos a {district}</strong>
                <span>Estamos ampliando cobertura cada mes. Déjanos tu zona y te avisamos apenas lleguemos.</span>

                {!emailSent ? (
                  <form className="notifyForm" onSubmit={handleEmailSubmit}>
                    <input
                      type="email"
                      required
                      placeholder="Tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Correo para aviso de cobertura"
                    />
                    <button type="submit">Avísame</button>
                  </form>
                ) : (
                  <p className="notifyDone">Listo, te avisaremos apenas lleguemos a tu zona.</p>
                )}

                <a className="ctaWhatsappGhost" href={waBorder} target="_blank" rel="noopener noreferrer">
                  ¿Crees que es un error? Escríbenos
                </a>
                <small className="notifyConsent">Te escribiremos solo para avisarte de cobertura.</small>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

const MapHandler = ({ place, marker }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !place || !marker) return;
    if (place.geometry?.viewport) map.fitBounds(place.geometry.viewport);
    if (place.geometry?.location) marker.position = place.geometry.location;
  }, [map, place, marker]);
  return null;
};

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;
    const options = {
      fields: ['geometry', 'name', 'formatted_address', 'address_components'],
      componentRestrictions: { country: 'pe' } // restringido a Perú
    };
    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;
    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input ref={inputRef} placeholder="Ingresa tu dirección" aria-label="Tu dirección" />
    </div>
  );
};

export default Cobertura;
