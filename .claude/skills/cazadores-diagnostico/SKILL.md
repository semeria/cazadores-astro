---
name: cazadores-diagnostico
description: Usar al editar el Diagnóstico Cazador: preguntas, opciones de respuesta, puntaje (0 a 2 por etapa, máximo 14), resultado, lista de prioridades o el formulario que abre WhatsApp. Cubre el contrato data-* entre index.astro y site.js.
---

# Diagnóstico Cazador

## Archivos implicados
- `src/pages/index.astro`, sección `#diagnostico`: `[data-question-count]`, `[data-question-topic]`, `[data-question]`, `[data-live-score]`, `[data-progress]`, botones `[data-answer="0|1|2"]`, `[data-quiz-back]`, `[data-quiz-result]`, `[data-score]`, `[data-result-title]`, `[data-result-summary]`, `[data-priority-list]`, `[data-lead-form]`, `[data-contact-method]`, `[data-contact-value]`, `[data-whatsapp-status]` y `[data-reset]`.
- `src/scripts/site.js`: arreglo de etapas (las preguntas viven en el campo `question`), estado `answers`, `questionIndex`, funciones `renderQuestion`, `renderResult` y el envío del formulario.
- `src/styles/global.css`: estilos de `.quizCard`, `.answers`, `.result`, `.priorityMeter` y `.leadForm`.

## Reglas del puntaje
- Cada etapa vale 0, 1 o 2 puntos. Son 7 etapas, así que el máximo es 14.
- Los umbrales del resultado están en `renderResult`: 12 o más, "base para acelerar"; 7 a 11, "fortalezas por consolidar"; menos de 7, "fortalecer los cimientos".
- Las prioridades son las tres etapas con menor puntaje. Si cambias el número de etapas, actualiza el máximo de 14 en `index.astro` (`/14`) y en `site.js`.

## Contrato que no debes romper
- Los botones `data-answer` valen exactamente `"0"`, `"1"` o `"2"`, y su texto visible es "Necesita trabajo", "En proceso" y "Consolidado" respectivamente. El arreglo `["Necesita trabajo", "En proceso", "Consolidado"]` de `site.js` debe seguir ese mismo orden.
- `aria-pressed` debe sincronizarse en cada render. La barra `[data-progress]` y su padre `role="progressbar"` deben seguir `aria-valuenow`.
- El foco se mueve a la pregunta o al título del resultado. No lo quites.
- Las respuestas viven solo en memoria del navegador. No añadas `localStorage`, `fetch` ni almacenamiento.

## Formulario y WhatsApp
- El envío no guarda datos ni llama a un servicio. Solo arma un mensaje y abre `wa.me` con `WHATSAPP_NUMBER`.
- Mientras `WHATSAPP_NUMBER` sea `"PENDIENTE_NUMERO"`, el formulario no abre nada y muestra el aviso de número pendiente. No cambies ese comportamiento sin que el usuario dé el número.
- Nunca afirmes en la interfaz que los datos se envían o se almacenan.

## Pasos para un cambio
1. Revisa la pregunta, el nombre de etapa y el resultado en `site.js` antes de cambiar el HTML.
2. Si cambias preguntas, mantén el tono dirigido al emprendedor y el español de la marca.
3. Prueba el flujo completo: responder las siete preguntas, usar "Pregunta anterior", ver el resultado, y "Repetir diagnóstico".
4. Ejecuta la skill `cazadores-verificar`.

## Restricciones
- No cambies `data-*` sin actualizar `site.js` en el mismo cambio.
- No cambies el número de WhatsApp sin que el usuario lo indique.
