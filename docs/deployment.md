# Despliegue

**Resumen:** Astro está configurado para generar un sitio estático en `dist/`. El repositorio no contiene configuración específica de proveedor de despliegue.

## Índice
- [Construcción](#construcción)
- [Artefacto](#artefacto)
- [Plataformas mencionadas](#plataformas-mencionadas)
- [Configuración y variables](#configuración-y-variables)

## Construcción
Los scripts de `package.json` son:
- `bun run dev`: inicia `astro dev`.
- `bun run start`: alias de `astro dev`.
- `bun run build`: ejecuta `astro build`.
- `bun run preview`: ejecuta `astro preview` para revisar la salida.

## Artefacto
La configuración `output: 'static'` genera archivos estáticos en `dist/`. El directorio `dist/` y `.astro/` están ignorados por Git según `.gitignore`.

## Plataformas mencionadas
El README indica que `dist/` puede servirse en Netlify, Cloudflare Pages o cualquier servidor estático. No se detectaron archivos de configuración específicos para esos proveedores; no se documenta un despliegue activo ni un pipeline CI/CD.

## Configuración y variables
El README indica que el sitio no necesita variables de entorno. `astro.config.mjs` establece Vite `server.allowedHosts` en `terminal.local`; no se encontró otra configuración de entorno en la aplicación.
