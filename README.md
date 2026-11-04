# Cazadores · Astro + Bun

Réplica de https://cazadoresweb.netlify.app/ recuperada el 22 de octubre de 2026.
Conserva el contenido, CSS completo, imágenes originales, diseño responsive,
animaciones, siete pestañas del método y diagnóstico de siete preguntas.

## Ejecutar

Instala Bun desde https://bun.sh si todavía no lo tienes. Descomprime este
proyecto y abre una terminal dentro de `cazadores-astro`:

```bash
bun install
bun run dev
```

Abre http://localhost:4321. Para detenerlo, pulsa Ctrl+C.

## Compilar y revisar la versión final

```bash
bun run build
bun run preview
```

La carpeta `dist/` contiene el sitio estático para Netlify, Cloudflare Pages
o cualquier servidor estático. No necesita variables de entorno ni backend.

## Archivos editables

- `src/pages/index.astro`: estructura y contenido de la página.
- `src/styles/global.css`: estilos originales, incluido el reset de Tailwind compilado; no requiere instalar Tailwind.
- `src/scripts/site.js`: metodología y diagnóstico interactivo.
- `public/`: logotipos, escudos e imagen para compartir.

El botón de aplicación abre el correo `contacto@proyectocazadores.com`, igual
que el original. No incluye un servicio de envío ni almacenamiento de respuestas.
Las imágenes se incluyen localmente y el sitio no depende del dominio original.
El código fuente del proyecto original no es público: esta reconstrucción utiliza
los recursos públicos servidos por la página, organizados como un proyecto Astro editable.
