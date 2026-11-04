---
name: cazadores-metodologia
description: Usar al editar las siete etapas de la metodología Cazadores (nombres, descripciones, resultados, preguntas) o su comportamiento de pestañas en la página. Cubre el contrato entre data-step, data-step-* en index.astro y el arreglo de etapas en site.js.
---

# Metodología de siete etapas

## Archivos implicados
- `src/pages/index.astro`: sección `#metodo`. Botones `role="tab"` con `data-step="0"` a `"6"` y el panel `.stepDetail` con `data-step-number`, `data-step-label`, `data-step-name`, `data-step-description` y `data-step-outcome`.
- `src/scripts/site.js`: arreglo de etapas (campos `n`, `name`, `description`, `outcome`, `question`) y listener sobre `[data-step]`.
- `src/styles/global.css`: estilos de `.steps`, `.stepDetail` y responsive.

## Contrato que no debes romper
- El índice de cada botón `data-step` debe coincidir con la posición en el arreglo de `site.js`.
- Cada botón conserva `role="tab"` y `aria-selected` sincronizado; solo uno puede tener la clase `active` y `aria-selected="true"`.
- El panel conserva `aria-live="polite"` y los cinco `data-step-*`.
- El arreglo debe tener siete etapas. Si añades o quitas una, actualiza botones, índices, numeración `01`–`07` y el texto "SIETE PASOS" del encabezado.

## Pasos para un cambio de contenido
1. Lee el arreglo de `site.js` y los botones de `index.astro` para confirmar que coinciden.
2. Cambia solo el texto en español, con el tono de la marca. Mantén los nombres de etapa existentes salvo que el usuario pida otro.
3. Si cambia un nombre de etapa, revisa también el diagnóstico, que usa `name` en las prioridades, y `docs/ui.md`.
4. Ejecuta la skill `cazadores-verificar`.

## Pendiente conocido
La etapa 06 se llama "Duplicidad" en `site.js` e `index.astro`, pero `docs/ui.md` describe esa área del diagnóstico como "desarrollo de líderes" y no usa el nombre de etapa. Confirma con el usuario cuál es el nombre correcto antes de tocarlo.

## Restricciones
- No cambies `data-step` ni los nombres de clase sin actualizar `site.js` y el CSS en el mismo cambio.
- No añadas lógica nueva de estado persistente ni de almacenamiento.
