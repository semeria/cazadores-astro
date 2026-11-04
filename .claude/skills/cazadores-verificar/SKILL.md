---
name: cazadores-verificar
description: Usar después de cualquier cambio en el sitio Cazadores para validar compilación, salida estática y revisión visual. Ejecuta bun run build, revisa dist/ y, si procede, bun run preview. No la uses para cambios solo de documentación.
---

# Verificar el sitio Cazadores

## Cuándo usarla
Tras modificar `src/`, `public/`, `astro.config.mjs` o `package.json`, antes de pedir aprobación de un cambio.

## Pasos
1. Compila: `bun run build`. Si falla, corrige la causa antes de continuar; no reportes éxito con errores.
2. Revisa la salida: confirma que `dist/index.html` existe y que `dist/` se generó en esta compilación. No edites `dist/` a mano.
3. Comprueba recursos locales: las rutas de `public/` (`/cazadores-logo.png`, `/cazadores-round.png`, `/cazadores-wolf-crest.png`, `/og.png`) deben seguir existiendo y referenciarse desde la raíz.
4. Si cambió algo visible o interactivo, levanta `bun run preview` y revisa:
   - Escritorio y ancho de 1050 px o menos (menú móvil del header).
   - Ancho de teléfono: sin scroll horizontal y con margen lateral de 16 px.
   - Las interacciones afectadas (metodología, diagnóstico, portal, CTA).
5. Repite las comprobaciones del paso 4 en el modo de movimiento reducido solo si tocaste animaciones.

## Qué reportar
- Comando ejecutado y resultado real (éxito o error con su salida).
- Qué se revisó visualmente y qué no pudiste revisar.

## Restricciones
- No instales dependencias ni cambies configuración para que la verificación pase.
- No uses servicios externos para la revisión.
- Si `bun` no está disponible, dilo y no des la verificación por hecha.
