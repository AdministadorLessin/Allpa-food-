# Prompt para Claude Design — Landing Allpa Food 2026

> **Cómo usarlo:** adjunta en Claude Design `Design_1_0.pdf` (manual de marca), la foto de la influencer y el mockup de referencia. Luego pega el bloque **PROMPT** completo. Antes de pegar, reemplaza los valores del *Bloque de datos variables*.

---

## Bloque de datos variables (completar antes de pegar)

| Variable | Valor a usar | Estado |
|---|---|---|
| Nombres de planes | Nutrivital · Fitfuel · Energy | ⚠️ El manual de marca usa Nutrivital · Nutrivital Plus · FitFuel |
| Precios | S/ 1,590 · S/ 2,290 · S/ 2,890 /mes | ⚠️ El manual usa S/ 315.99 · S/ 435.99 · S/ 569.99 |
| Métricas | +1000 clientes · 4.9/5 · 500+ reseñas | ⚠️ Confirmar con negocio |
| Links app | App Store / Google Play | ⚠️ Si no existen, usar “Próximamente” |
| WhatsApp | Número + mensaje precargado | Pendiente |
| Cobertura | “Delivery en Lima” | Confirmar distritos |

---

# PROMPT

## 0 — Rol

Actúa como director de diseño de producto de un estudio que hace identidad digital para food-techs internacionales. Vas a diseñar la **landing page completa de Allpa Food**, orientada 100% a la venta de membresías mensuales de alimentación saludable por delivery.

Antes de dibujar, escribe un **plan de diseño de 8–10 líneas**: paleta (hex nombrados), tipografía y escala, concepto de layout y **elemento signature** (el único detalle por el que la página será recordada). Si alguna parte del plan podría servir para cualquier otra landing de comida saludable, cámbiala y explica por qué. Luego construye siguiendo ese plan al pie de la letra.

## 1 — Qué es Allpa Food

Food-tech peruana de planes mensuales de alimentación saludable por delivery. **No vendemos comida: operamos el sistema que la hace inteligente.** Plataforma de suscripción con app, programación de menús, seguimiento nutricional y logística automatizada.

- **Lo que no somos:** restaurante, mercado orgánico, comida rápida. Nada rústico, artesanal ni campestre.
- **Cómo se siente:** Apple + Notion + Linear + Stripe + Airbnb. Precisión, calma y confianza en cada superficie.
- **Atributos:** minimalista · tecnológica · elegante · humana · optimista · confiable · premium.
- **Audiencia:** adultos 25–45 en Lima que quieren comer bien sin gestionar el proceso.
- **Trabajo de la página:** que en menos de 5 segundos se entienda la propuesta y que el usuario elija un plan o escriba por WhatsApp.

## 2 — Sistema visual (obligatorio, sin excepciones)

**Color — seis, cero excepciones**
- Verde principal `#3CFB9F` — reservado para acentos, datos y CTAs. Nunca como fondo mayoritario.
- Verde oscuro `#183A2A` — titulares, fondos premium, contraste.
- Mint claro `#EAFBF3` — superficies suaves.
- Blanco cálido `#FCFCFA` — fondo base. El espacio en blanco es parte de la identidad.
- Carbón `#16231D` — texto y superficies oscuras.
- Gris medio `#66736C` — texto secundario.
- Prohibido: colores fuera de paleta, degradados ajenos, gradientes de moda.

**Tipografía — Inter, única familia**
- Bold: titulares. Semibold: subtítulos. Medium: interfaz y datos. Regular: cuerpo.
- Escala desktop sugerida: 64 / 40 / 28 / 20 / 16 / 14. Cuerpo móvil mínimo 16 px.
- Nunca combinar con serif ni tipografías ornamentales.

**Superficie**
- Glassmorphism: `rgba(255,255,255,0.58)` sobre claro; `rgba(22,35,29,0.55)` sobre oscuro; `backdrop-blur` 18–32 px; borde 1 px blanco 35–55 %; sombra `0 18px 50px rgba(24,58,42,0.12)`; reflejo interior sutil arriba; radios 22–32 px.
- Tarjetas **flotantes**, suspendidas sobre el fondo — nunca incrustadas.
- Sombras casi imperceptibles, nunca decorativas.
- Iconografía lineal uniforme. Prohibidos los iconos 3D o infantiles.

**Layout**
- Desktop 1440 px, contenedor máx. 1280 px, retícula de 12 columnas.
- Mobile 390 px, mobile-first real.
- Secciones: 96–128 px verticales en desktop, 64–80 px en mobile. Título→texto 16–24 px. Entre cards 20–28 px.

**Principios**
1. El aire ordena la jerarquía antes que el color o el tamaño.
2. Bordes suaves y precisos.
3. Tarjetas flotantes.
4. **El dato es forma:** anillos de progreso y números grandes comunican antes que el texto.

**Logotipo**
Usar el logotipo oficial. Área de protección = alto del isotipo en todos los lados. Mínimo 24 px digital. Nunca deformar, estirar ni recolorear fuera de paleta.

## 3 — Fotografía

Comida real, luz natural, composición minimalista. Usar la **imagen adjunta de la influencer con el bowl de Allpa Food** como pieza protagonista del hero, sin alterar el logo del empaque. Integrar con degradado suave hacia blanco, sin cortes duros. Añadir profundidad, blur ambiental y 3–5 partículas/hojas orgánicas verdes como máximo.

## 4 — Estructura (11 secciones, en este orden)

### 01 · Header
Sticky, 84–92 px, inicialmente transparente y vidrio blanco al hacer scroll. El logo pesa más que los enlaces.
- Izquierda: logotipo.
- Centro: Planes · Menú semanal · Cómo funciona · Empresas · Nosotros.
- Derecha: botón oscuro con icono **“WhatsApp”** + botón verde **“Quiero mi plan”**.
- Hover de enlaces: punto verde animado. WhatsApp abre chat con: *“Hola, quiero conocer qué plan de Allpa Food es ideal para mí.”*

### 02 · Hero
Dos columnas 46/54. Izquierda copy + CTAs, derecha la fotografía de la influencer.
- Eyebrow: `COMIDA SALUDABLE • DELIVERY DIARIO`
- Titular: **“Comida saludable que sí provoca.”** — “sí provoca.” en verde principal.
- Texto: “Planes personalizados, altos en proteína y listos todos los días para ayudarte a lograr tu mejor versión.”
- Cuatro cards translúcidas: Alto en proteína · Ingredientes frescos · Delivery en Lima · Planes mensuales.
- CTA primario oscuro **“Ver planes”** + flecha. CTA secundario vidrio **“Hablar por WhatsApp”** + icono.
- Prueba social horizontal: 4–5 avatares, cinco estrellas, “4.9/5 en más de 500 reseñas”.
- Tarjetas flotantes sobre la imagen:
  1. “Preparado hoy / Entregado hoy” con check verde.
  2. “+1000 personas ya comen mejor con Allpa Food” con miniavatares.
  3. “Tu balance diario”: **520 Calorías** · 45g Proteína · 65g Carbs · 18g Grasas, con anillo de progreso.
  4. Sello circular: “Comida criolla / versión saludable”.

### 03 · Cómo funciona
Gran superficie mint/blanca con cuatro tarjetas conectadas por flechas finas. Número grande + icono lineal + título + descripción + microbotón “+”.
- Etiqueta: `¿CÓMO FUNCIONA?` · Título: “Así de fácil es cuidar de ti cada día” · Texto: “Tú eliges tu objetivo, nosotros nos encargamos del resto.” · Botón: “Quiero empezar”.
- **01 Cuéntanos tu objetivo** — “Bajar grasa, mantenerte o ganar masa muscular.”
- **02 Elegimos tu plan ideal** — “Te recomendamos el plan que mejor se adapta a ti.”
- **03 Recibes tus comidas** — “Por delivery, frescas y listas para disfrutar.”
- **04 Ajustamos según tu avance** — “Mejoramos porciones y opciones contigo.”
- En móvil: timeline vertical.

### 04 · Planes
Etiqueta `ELIGE TU PLAN` · Título “Planes diseñados para tu estilo de vida” · Chips: Refresco del día · Guía nutricional · Delivery incluido.

Tres tarjetas Premium SaaS, **sin fotografías**, con icono UI distinto por plan, fondo vidrio blanco/mint, alineación idéntica de títulos, listas y CTAs, precio grande abajo y CTA circular con flecha.

| Plan | Subtítulo | Descripción | Incluye | Precio |
|---|---|---|---|---|
| **Nutrivital** | Solo almuerzos | “Ideal si quieres resolver tu comida principal del día de forma saludable.” | Almuerzos · Refresco del día · Guía nutricional · Delivery | Desde S/ 1,590 /mes |
| **Fitfuel** ⟵ badge “MÁS ELEGIDO” | Almuerzo + Cena | “Ideal si quieres cuidar mejor tu alimentación durante todo el día.” | Almuerzos · Cenas · Refrescos · Guía nutricional · Delivery | Desde S/ 2,290 /mes |
| **Energy** | Desayuno + Almuerzo + Cena | “La opción completa para quienes quieren un acompañamiento total.” | Desayunos · Almuerzos · Cenas · Refrescos · Guía nutricional · Delivery | Desde S/ 2,890 /mes |

Fitfuel se eleva ligeramente, con borde verde y glow controlado — destaca por jerarquía, no por ruido. Hover: elevación 6 px. En mobile se apilan con Fitfuel primero.

### 05 · Menú semanal
Superficie verde oscuro premium, bordes amplios, brillo interno.
- Izquierda: “**MENÚ NUEVO** cada semana” (“cada semana” en verde) + “Platos variados, deliciosos y balanceados para que disfrutes sin culpas.” + CTA circular.
- Centro: carrusel de 4–5 tarjetas fotográficas superpuestas con profundidad tipo deck 3D. Tarjeta activa: **“Lomo saltado con quinua y verduras”** — 45g Proteína · 52g Carbs · 15g Grasas. Navegación con flechas.

### 06 · App
Convive con la sección 05 en el mismo módulo oscuro, bloque derecho.
- “Descarga nuestra app” + “Gestiona tu plan, revisa el menú, tus entregas y más.” + botones App Store y Google Play.
- Mockup de teléfono que emerge desde el borde derecho, mostrando: saludo “Hola, Andrea 👋”, plan Fitfuel, progreso del plan, próxima entrega, menú de hoy, macros y navegación inferior.

### 07 · Métricas
Barra horizontal en mint muy claro, cuatro columnas con separadores finos y contadores que aparecen al entrar al viewport.
- 👥 **+1000** Clientes activos · ⭐ **4.9/5** Calificación promedio · 🌿 **100%** Comprometidos contigo · 🛡️ **Entrega puntual** Todos los días.

### 08 · Influencers
Etiqueta `ELLOS YA VIVEN ALLPA` · Título “Influencers que eligen comer saludable y rico” · Texto “Personas reales, rutinas reales. Así disfrutan Allpa Food en su día a día.” · Botón “Ver más experiencias”.

Carrusel de cuatro tarjetas verticales tipo Reel: usuario + avatar, seguidores, imagen vertical, iconos de corazón/comentario/compartir/guardar, contador visible, interfaz en cristal oscuro. Contenido: empaque kraft · comiendo un bowl · sosteniendo el plato · bolsa de delivery. Arrastrable, autoplay lento solo en desktop, pausa al hover. En móvil, 1.2 cards visibles.

### 09 · FAQ
Acordeón limpio sobre blanco cálido, máximo 6 preguntas, una abierta por defecto. Resolver las objeciones reales antes del cierre: cobertura y horarios, cómo se pausa o reprograma, qué pasa si no me gusta un plato, si puedo cambiar de plan, cómo se paga, si hay permanencia. Cierra con microcopy “¿Otra duda? Escríbenos por WhatsApp.”

### 10 · Cierre comercial
Barra CTA verde oscura.
- Izquierda: icono de marca + “Empieza a comer mejor desde este mes” + “Déjanos ayudarte a elegir el plan ideal para ti.”
- Centro: +1000 Clientes activos · 4.9/5 Calificación promedio · 100% Comprometidos contigo.
- Derecha: botón verde brillante **“Hablar con Rodrigo por WhatsApp”** + icono, glow muy controlado, microcopy “Te respondemos en segundos”.
- En mobile: CTA ancho fijo que aparece solo después del hero, sin tapar contenido.

### 11 · Footer
Compacto, fondo carbón o verde oscuro, separadores mínimos, menos protagonista que el CTA.
1. Logo + “Comida saludable que sí provoca.”
2. Navegación: Planes · Menú semanal · Cómo funciona · Empresas · Nosotros.
3. Información: Preguntas frecuentes · Términos y condiciones · Política de privacidad · Política de cambios y reprogramaciones.
4. Contacto: WhatsApp · Lima, Perú · Horario de atención.
5. Redes: Instagram · Facebook · TikTok · YouTube.
6. Inferior: copyright, razón social y enlaces legales.

## 5 — Motion

El movimiento comunica estado, nunca decora.
- Curva: `cubic-bezier(0.22, 1, 0.36, 1)`. Duración estándar 320–480 ms. Entradas suaves, salidas rápidas.
- Hero: titular por líneas con fade + desplazamiento vertical (stagger).
- Fotografía principal: scale 1.04 → 1 con parallax muy suave.
- Tarjetas flotantes con stagger de 80–120 ms.
- Anillos y barras de macros que se llenan al entrar al viewport.
- Contadores con conteo progresivo.
- Carrusel de platos con profundidad y tarjeta central activa.
- Hover: elevación sutil y cambio de opacidad; flechas y microbotones se desplazan 4–6 px. Nunca rebote.
- Máximo 3–5 hojas/partículas visibles, lentas.
- Respetar `prefers-reduced-motion`.

## 6 — Reglas de conversión

- CTA principal “Quiero mi plan” visible en header y repetido al final. CTA secundario de baja fricción “Hablar por WhatsApp”.
- Un solo objetivo y un solo CTA por sección; cada sección termina en una acción lógica.
- Prueba social visible antes del primer scroll.
- No obligar a entrar a la app para entender ni comprar.
- Los planes se comparan fácil, sin imágenes dentro de las tarjetas.
- El plan recomendado destaca por jerarquía.
- Reducir fricción de forma continua. Nunca abrumar.
- Orden narrativo: deseo → claridad → planes → producto → tecnología → prueba social → cierre.

## 7 — Responsive y accesibilidad

- Hero móvil en una columna: copy primero, imagen después, CTA principal visible sin scroll.
- Tarjetas flotantes se reducen a 2–3 elementos clave.
- Planes apilados con Fitfuel primero; comparación por acordeón.
- Carruseles táctiles con indicadores claros.
- Contraste AA mínimo. Foco visible en links, botones y carruseles.
- Alt text descriptivo para platos, influencer, empaque y mockups.
- Nunca transmitir información solo por color.

## 8 — Prohibido

- Diseñar una web de restaurante.
- Fotos de comida dentro de las tarjetas de planes.
- Colores o degradados fuera de la paleta.
- Serif, tipografías ornamentales o cualquier familia distinta de Inter.
- Deformar, recolorear o pegar el logotipo sin área de protección.
- Iconos 3D, ilustraciones infantiles, texturas rústicas o campestres.
- Adornos que no sirvan al mensaje. Sombras decorativas. Animación de más.
- Errores ortográficos: todo el copy en español, revisado.

## 9 — Entregable

1. Plan de diseño corto (paleta, tipografía, layout, signature).
2. Landing completa desktop 1440 px, las 11 secciones de inicio a fin.
3. Versión mobile 390 px de todas las secciones.
4. Estados de hover y foco de CTAs, cards de plan y carruseles.
5. Nota de motion por sección (qué se anima, cuándo y con qué duración).

---

# Apéndice — Prompts de iteración

**Ronda 2 · Afinar hero**
> Solo el hero. Aumenta el aire alrededor del titular, reduce a 3 las tarjetas flotantes sobre la imagen y refuerza el contraste del CTA primario. Mantén el resto intacto.

**Ronda 3 · Afinar planes**
> Solo la sección de planes. Iguala la altura de las tres tarjetas y la línea base de precios y CTAs. Fitfuel debe leerse como recomendado únicamente por elevación y borde verde: quita cualquier glow que compita con el precio.

**Ronda 4 · Mobile**
> Rehaz la vista 390 px. CTA principal visible sin scroll, planes apilados con Fitfuel primero, carruseles con 1.2 cards visibles y barra de WhatsApp fija que aparezca solo después del hero.

**Ronda 5 · QA**
> Audita contra el manual: seis colores exactos, Inter en cuatro pesos, radios 22–32 px, área de protección del logo, contraste AA, foco visible, alt text y reduced motion. Lista lo que no cumple.

---

# Checklist antes de desarrollo

- [ ] Confirmar precios vigentes y nombres definitivos de planes.
- [ ] Confirmar zonas reales de cobertura y horario de delivery.
- [ ] Confirmar métricas públicas: clientes, reseñas y puntualidad.
- [ ] Definir enlaces de App Store y Google Play o poner “Próximamente”.
- [ ] Reunir fotografías reales de platos, empaques e influencers.
- [ ] Preparar enlaces y mensajes de WhatsApp por CTA.
- [ ] Comprimir imágenes en AVIF/WebP conservando nitidez.
- [ ] Medir eventos: clic en planes, WhatsApp, scroll, selección de plan y salida.
- [ ] Pruebas de velocidad y conversión móvil.
