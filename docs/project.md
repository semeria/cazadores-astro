# Proyecto

**Resumen:** Cazadores es un sitio web informativo para presentar la comunidad, su metodología y un diagnóstico de siete preguntas. Este documento describe identidad, alcance y organización general del producto.

## Índice
- [Identidad](#identidad)
- [Alcance visible](#alcance-visible)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Tecnologías y dependencias directas](#tecnologías-y-dependencias-directas)

## Identidad
- Nombre del paquete: `cazadores-astro` (versión `1.0.0`, privado), según `package.json`.
- Marca presentada: Proyecto Cazadores.
- El sitio está escrito para público hispanohablante y establece Cancún, México y Latinoamérica como territorio de referencia.

## Alcance visible
La página contiene presentación de la comunidad, explicación interactiva de siete etapas, cuatro pilares, diagnóstico interactivo y un enlace para aplicar por correo. El README describe el sitio como una reconstrucción editable a partir de recursos públicos; indica que el código fuente del sitio original no es público.

## Estructura del repositorio
- `src/pages/`: rutas Astro; actualmente contiene `index.astro`.
- `src/scripts/`: lógica JavaScript del navegador; actualmente `site.js`.
- `src/styles/`: hoja global `global.css`.
- `public/`: logotipos, escudo e imagen de compartir servidos como archivos estáticos.
- `docs/`: documentación técnica del proyecto.

## Tecnologías y dependencias directas
- Astro `5.16.6` para el sitio y `libphonenumber-js` `^1.13.15` para metadatos y validación de teléfonos internacionales; dependencias directas listadas en `package.json`.
- Bun es el gestor indicado por el lockfile y README.
- Motor Node.js declarado: `>=22.12.0`.
- No se declara framework de componentes frontend adicional.
