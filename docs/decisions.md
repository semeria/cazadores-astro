# Decisiones técnicas detectadas

**Resumen:** La configuración y los archivos existentes muestran una solución deliberadamente pequeña basada en Astro estático, sin backend y con interacciones nativas del navegador.

## Índice
- [Salida estática](#salida-estática)
- [Interacciones en el navegador](#interacciones-en-el-navegador)
- [Estilos y recursos locales](#estilos-y-recursos-locales)
- [Registro de decisiones formal](#registro-de-decisiones-formal)

## Salida estática
`astro.config.mjs` declara `output: 'static'`. El README confirma que el resultado se publica como archivos estáticos y no requiere backend.

## Interacciones en el navegador
La metodología y el diagnóstico se implementan en un módulo JavaScript que opera sobre el DOM y atributos `data-*`; no se detecta framework de UI, servicio remoto ni almacenamiento para estas funciones.

## Estilos y recursos locales
Los estilos visuales están en una hoja global y los recursos de marca están almacenados en `public/`. El README señala que Tailwind no requiere instalación en este proyecto aunque el CSS incluya un reset derivado de Tailwind.

## Flujo de ramas
Decisión registrada: cada plan de cambios se ejecuta en una rama `exp/<tema>` creada desde `master`. Los cambios llegan a `master` solo tras aprobación explícita del usuario (fusión con `--no-ff`). El repositorio es local por ahora; el remoto de GitHub se configurará más adelante. Procedimiento completo en `.claude/skills/cazadores-flujo-ramas/SKILL.md`.

## Registro de decisiones formal
No se encontraron ADR (Architecture Decision Records) ni historial de decisiones técnicas previo a este repositorio. Los puntos anteriores son decisiones observables por configuración y estructura, no registros formales con autoría o justificación histórica.
