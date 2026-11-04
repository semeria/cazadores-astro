# Base de datos

**Resumen:** No se detectan motores, esquemas ni clientes de base de datos en el proyecto. El diagnóstico mantiene respuestas temporalmente en memoria y no las persiste.

## Índice
- [Persistencia detectada](#persistencia-detectada)
- [Colecciones y modelos](#colecciones-y-modelos)
- [Información pendiente](#información-pendiente)

## Persistencia detectada
No hay conexión a base de datos ni SDK, ORM o configuración de persistencia visibles en las dependencias directas y el código de aplicación. `site.js` conserva respuestas en un array mientras permanece activa la página; el reinicio vacía ese estado. No se detecta escritura a almacenamiento del navegador.

## Colecciones y modelos
No existen colecciones, tablas ni modelos de datos de persistencia identificables en el repositorio.

## Información pendiente
**Pendiente de documentar:** sistemas de datos externos al repositorio, si los hubiera.
