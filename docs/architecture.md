# Arquitectura

**Resumen:** La arquitectura es una página Astro pre-renderizada como HTML estático y acompañada por una hoja CSS y un módulo JavaScript ejecutado en el navegador. No se observa capa de servidor propia.

## Índice
- [Vista general](#vista-general)
- [Piezas y responsabilidades](#piezas-y-responsabilidades)
- [Flujo de renderizado e interacción](#flujo-de-renderizado-e-interacción)
- [Límites observados](#límites-observados)

## Vista general
`astro.config.mjs` establece `output: 'static'`. La ruta actualmente definida es `src/pages/index.astro`, que importa la hoja global y carga `src/scripts/site.js`. Astro genera el sitio en `dist/`; los recursos de `public/` se copian para servirse directamente.

## Piezas y responsabilidades
- **Página Astro:** `src/pages/index.astro` contiene estructura, contenido, metadatos, accesibilidad y el marcado de las interacciones.
- **Módulo del navegador:** `src/scripts/site.js` contiene los datos de las siete etapas y la lógica de pestañas y diagnóstico.
- **Estilos:** `src/styles/global.css` contiene estilos propios, reset incluido en el CSS y adaptaciones por tamaño de pantalla y movimiento reducido.
- **Recursos estáticos:** `public/` contiene `cazadores-logo.png`, `cazadores-round.png`, `cazadores-wolf-crest.png` y `og.png`.

## Flujo de renderizado e interacción
1. Astro compila la página y sus estilos a archivos estáticos.
2. El navegador muestra el marcado; el módulo `site.js` registra listeners sobre selectores `data-*` presentes en la página.
3. Al seleccionar una etapa, el módulo actualiza los textos de detalle y los estados `aria-selected`.
4. El diagnóstico avanza por respuestas, calcula una puntuación y muestra un resultado en el mismo documento. El botón de reinicio restablece el estado local del módulo.

## Límites observados
No se detectan endpoints, controladores de servidor, capa de servicios, componentes frontend reutilizables, ni integración con almacenamiento. El diagnóstico utiliza estado en memoria del navegador durante la interacción.
