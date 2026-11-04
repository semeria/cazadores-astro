# Interfaz de usuario

**Resumen:** La interfaz consiste en una página en español con diseño propio, implementada en Astro y CSS, con dos interacciones del lado del cliente: navegación de siete etapas y un diagnóstico de siete preguntas.

## Índice
- [Estructura de la página](#estructura-de-la-página)
- [Interacciones](#interacciones)
- [Accesibilidad y adaptación](#accesibilidad-y-adaptación)
- [Recursos visuales](#recursos-visuales)

## Estructura de la página
`src/pages/index.astro` incluye navegación principal, hero, manifiesto, metodología, cuatro pilares, diagnóstico, llamada a aplicar, máxima y pie de página. El documento declara `lang="es"`, título, descripción, metadatos Open Graph/Twitter y favicon.

El footer agrupa marca, redes y datos institucionales en una cuadrícula con composición de tres columnas en escritorio, dos en tablet y una columna centrada en móvil. Los iconos de Facebook e Instagram enlazan a los perfiles `proyectocazadores1` y `proyectocazadores`, respectivamente. El enlace de WhatsApp apunta a `https://wa.me/529983317385` y se abre en una nueva pestaña.

El CTA “Aplicar a Cazadores” abre WhatsApp con un mensaje inicial y utiliza el destinatario configurado en `WHATSAPP_NUMBER`; el valor actual es `+52 998 331 7385`; si queda vacío o sin dígitos, el CTA informa que el número está pendiente y no abre un destino inválido. El header incluye “Ingresar al portal”, que muestra un diálogo de confirmación antes de abrir `https://app.proyectocazadores.com` en una nueva pestaña.

En anchos de hasta 1050 px, el header sustituye la navegación horizontal por un botón de menú y un panel desplegable con los enlaces internos y ambos CTA completos. Por encima de ese breakpoint conserva el diseño horizontal de escritorio.

## Interacciones
- **Metodología:** siete botones de pestaña tienen `data-step` con índices de `0` a `6`. Al hacer clic, `site.js` actualiza número, nombre, descripción y resultado de etapa, y mantiene `aria-selected` sincronizado.
- **Diagnóstico:** las siete preguntas están dirigidas al emprendedor y cubren identidad, visibilidad, credibilidad, rentabilidad, escalabilidad, desarrollo de líderes y sistematización. Cada etapa se evalúa en tres niveles (0, 1 o 2 puntos), para un máximo de 14. La interfaz muestra progreso y puntaje acumulado, permite volver a la pregunta anterior y presenta el nivel general junto con las tres etapas de menor puntuación, acompañadas de indicadores visuales de puntaje.
- Al terminar, el visitante proporciona nombre, empresa opcional y un dato de contacto (correo o WhatsApp). Para WhatsApp se presenta un selector internacional con bandera y lada, preseleccionado en México (+52); se valida y normaliza el número antes de incluirlo en el mensaje. En móvil, el método de contacto, el país y el número se apilan a ancho completo. `site.js` arma un mensaje con todas las respuestas, puntaje y prioridades para abrir `wa.me`; el número destino está pendiente de configurar en `WHATSAPP_NUMBER`. El visitante revisa y envía el mensaje desde WhatsApp. No se almacena la información en el sitio.
- `data-reset` reinicia las respuestas y el formulario; los estados dinámicos conservan `aria-live`, `aria-pressed` y progreso accesible.
- Los atributos `data-*` del HTML y sus selectores en `site.js` forman el contrato entre marcado y lógica.

## Accesibilidad y adaptación
El marcado usa elementos semánticos, etiqueta de navegación, roles de pestaña y estado seleccionado, descripciones alternativas de imágenes, y regiones `aria-live` para contenido dinámico. El menú móvil expone su estado con `aria-expanded`, permite cerrarse con Escape y cierra al navegar. Las respuestas del diagnóstico exponen `aria-pressed`, la barra de avance expone su valor actual y el foco pasa a cada pregunta o al resultado. `global.css` incluye breakpoints responsive y reglas `prefers-reduced-motion`.

## Recursos visuales
Los recursos están en `public/` y se referencian desde la raíz: logotipo, sello circular, escudo del lobo e imagen Open Graph (`og.png`).
