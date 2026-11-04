# API

**Resumen:** El proyecto no define una API propia ni endpoints HTTP de aplicación. La interacción actual se ejecuta localmente en el navegador.

## Índice
- [Endpoints](#endpoints)
- [Interacción sin API](#interacción-sin-api)
- [Información pendiente](#información-pendiente)

## Endpoints
No se encontraron rutas API, handlers de solicitudes, funciones serverless ni adaptadores de servidor en la configuración y estructura de aplicación revisadas.

## Interacción sin API
La navegación usa anclas internas. La selección de etapas y el diagnóstico se gestionan mediante eventos DOM en `src/scripts/site.js`; no se observan llamadas `fetch` ni solicitudes AJAX en el código fuente de `src/`.

El enlace de aplicación abre el cliente de correo mediante `mailto:contacto@proyectocazadores.com` y un asunto predefinido. No es un endpoint ni un envío implementado por la aplicación.

## Información pendiente
**Pendiente de documentar:** cualquier API o servicio operado fuera del código de este repositorio.
