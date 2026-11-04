# Proyecto
Cazadores (`cazadores-astro`), sitio web estático de la comunidad Proyecto Cazadores.

# Objetivo
Presentar la comunidad, su metodología de siete etapas y un diagnóstico interactivo para visitantes interesados en aplicar.

# Stack detectado
- Astro 5.16.6, con salida estática (`output: 'static'`).
- JavaScript del navegador en módulos ES; no hay framework de UI adicional.
- CSS propio en `src/styles/global.css`. Incluye reglas/reset originados en Tailwind, pero Tailwind no está configurado como dependencia ni herramienta de compilación; no asumir que está disponible.
- Bun como gestor de paquetes indicado por `bun.lock` y el README. Node.js requerido: `>=22.12.0`.
- Dependencia directa de ejecución/desarrollo: Astro. No hay backend, base de datos ni sistema de autenticación detectables.
- Scripts: `bun run dev`, `bun run build` y `bun run preview`.
- El artefacto generado es `dist/`. El README indica que puede servirse como sitio estático en Netlify, Cloudflare Pages o cualquier servidor estático; no hay configuración de despliegue específica detectada.

# Convenciones de código
- Mantén la estructura actual: páginas Astro en `src/pages/`, scripts del navegador en `src/scripts/`, estilos en `src/styles/` y recursos públicos en `public/`.
- La página principal y su contenido viven en `src/pages/index.astro`; la lógica de metodología/diagnóstico está en `src/scripts/site.js`.
- Los estilos visuales globales y responsive viven en `src/styles/global.css`. Conserva el diseño responsive y las reglas de movimiento reducido existentes.
- Usa el español para el contenido visible y respeta el tono y los nombres de marca existentes.
- La interacción actual enlaza HTML y JavaScript mediante atributos `data-*`; conserva esos contratos al modificar cualquiera de ambos lados.
- Conserva HTML semántico, etiquetas ARIA y atributos accesibles presentes, incluidos roles/estados de pestañas y regiones dinámicas.
- Las imágenes y marcas se sirven desde `public/` mediante rutas absolutas desde la raíz del sitio.
- TypeScript está configurado con el perfil estricto de Astro, aunque el código de aplicación existente usa Astro, JavaScript y CSS.

# Buenas prácticas
- Antes de cambiar código, lee este archivo y consulta únicamente los documentos de `/docs` necesarios para la tarea; no cargues toda la documentación sin necesidad.
- Después de modificar código, comprueba si la documentación quedó desactualizada.
- Si cambió la arquitectura, autenticación, base de datos, API o despliegue, actualiza únicamente el documento correspondiente en `/docs` y evita duplicar información.
- Considera `/docs` la fuente oficial de conocimiento técnico del proyecto; mantén este archivo pequeño y limitado a instrucciones permanentes para agentes.
- Antes de cambiar una interacción, sigue el flujo completo entre el marcado de `index.astro` y los selectores/eventos de `site.js`.
- Mantén el sitio compatible con generación y entrega estáticas; no introduzcas dependencias de servidor, almacenamiento o secretos sin un requisito explícito.
- Al cambiar contenido o componentes visuales, comprueba que funcione en pantallas estrechas y que preserve los metadatos y recursos locales.
- Prefiere las dependencias ya existentes y comprueba `package.json` antes de dar por disponible una librería.
- Verifica cambios de compilación con `bun run build`; usa `bun run dev` o `bun run preview` para revisión visual cuando proceda.
- Actualiza las instrucciones o documentación afectadas cuando cambie el uso del proyecto.
- Flujo de ramas: cada plan se trabaja en `exp/<tema>` desde `master`; solo se fusiona a `master` con aprobación explícita del usuario y no se hace `push` sin pedirlo. Detalle en `.claude/skills/cazadores-flujo-ramas/SKILL.md`.

# Qué nunca debe hacer un agente
- No inventar backend, autenticación, base de datos, servicios externos ni infraestructura de despliegue que no estén presentes.
- No añadir dependencias, frameworks, configuración de Tailwind o herramientas de despliegue como si ya formaran parte del stack.
- No retirar ni renombrar atributos `data-*` usados por `site.js` sin actualizar coordinadamente el marcado o la lógica correspondiente.
- No eliminar recursos existentes ni reemplazar las marcas/imágenes locales por dependencias remotas sin solicitud explícita.
- No guardar información del diagnóstico ni afirmar que el formulario se envía o almacena: el proyecto no implementa ese servicio.
- No introducir secretos, credenciales o variables de entorno innecesarias; el sitio documenta que no las requiere.
- No editar `dist/` ni archivos generados dentro de `.astro/` como fuente de la aplicación.

# Flujo recomendado para modificar código
1. Inspecciona los archivos implicados y confirma si el cambio afecta página, interacción, estilos o recursos.
2. Identifica y conserva los contratos entre el HTML de Astro y los selectores/eventos JavaScript.
3. Realiza el cambio en los archivos fuente de `src/` o en `public/`, siguiendo las convenciones existentes.
4. Ejecuta `bun run build` para validar la compilación y revisa el resultado visual/interactivo cuando aplique.
5. Informa de los archivos modificados y de las verificaciones ejecutadas.

# Ubicación de la documentación
Toda la documentación del proyecto vive dentro de `/docs`. No copies documentación extensa en este archivo; mantenlo como instrucciones permanentes para agentes.

## Uso de la documentación

Antes de responder o modificar código:

1. Identifica qué área del proyecto está involucrada.
2. Lee únicamente el documento correspondiente dentro de /docs.
3. No cargues documentos que no sean necesarios.
4. Si modificas el proyecto, actualiza únicamente el documento afectado.
5. Mantén AGENTS.md como un archivo breve de reglas; toda la documentación técnica debe permanecer en /docs.