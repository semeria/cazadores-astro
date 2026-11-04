---
name: cazadores-flujo-ramas
description: Usar al crear un plan o al aplicar cambios en el repositorio Cazadores. Crea una rama experimental exp/<tema> desde master, hace allí todo el trabajo, y solo fusiona a master tras la aprobación explícita del usuario. No hace push ni fusiona sin permiso.
---

# Flujo de ramas experimentales (Cazadores)

Objetivo: ningún cambio llega a `master` sin revisión del usuario. Cada plan vive en su propia rama `exp/<tema>`.

## 1. Antes de empezar
- Ejecuta `git status` y `git branch --show-current`.
- Si hay cambios sin confirmar en `master` o la rama actual no es `master`, detente y pregunta antes de continuar.
- Confirma que el repositorio tiene el commit base (`git log --oneline -1`).

## 2. Crear la rama experimental
- Desde `master` limpio: `git switch -c exp/<tema-en-kebab-case>`.
- Usa un nombre corto y descriptivo, por ejemplo `exp/metodologia-etapa-3`.
- Si ya existe una rama con ese nombre, usa un sufijo de fecha o pregunta. No la sobrescribas.

## 3. Trabajar en la rama
- Implementa el plan solo en la rama `exp/...`. Nunca edites `master` directamente.
- Haz commits pequeños con mensajes en español que expliquen el cambio.
- Cada mensaje de commit termina con:
  `Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>`
- Respeta `AGENTS.md`: no edites `dist/` ni `.astro/`, y mantén los contratos `data-*`.

## 4. Verificar antes de pedir aprobación
- Ejecuta `bun run build` y reporta el resultado real.
- Si cambió algo visible, indica cómo revisarlo con `bun run preview`.
- Si cambió la arquitectura o el comportamiento, actualiza solo el documento afectado en `docs/`.

## 5. Pedir aprobación
Presenta un resumen con:
- Rama: `exp/<tema>`.
- Archivos cambiados: `git diff master...exp/<tema> --stat`.
- Resultado de `bun run build`.
- Pregunta única: ¿apruebas fusionar a `master`?

Termina aquí y espera la respuesta.

## 6. Tras aprobación explícita
- Pasa a master: `git switch master`.
- Fusiona sin avance rápido para conservar el historial de la rama: `git merge --no-ff exp/<tema> -m "Fusiona exp/<tema>: <resumen>"`.
- Verifica con `git log --oneline -3` y `bun run build` en `master`.
- Elimina la rama experimental ya fusionada: `git branch -d exp/<tema>`. Es una regla permanente del usuario: todo plan que pasa a `master` deja su rama `exp/` borrada. Usa `-d` (que solo borra ramas totalmente fusionadas); nunca `-D` para una rama fusionada.
- Si `git branch -d` se niega, detente y pregunta; no fuerces el borrado.

## 7. Si el usuario rechaza o pide cambios
- Rechazo: `git switch master` y no fusiones. La rama queda para consulta. Bórrala con `git branch -D` solo con confirmación explícita.
- Cambios pedidos: vuelve a `exp/<tema>`, haz los commits y repite desde el paso 4.

## Reglas
- La aprobación debe venir del usuario en el chat, para ese cambio concreto. No generalices una aprobación anterior.
- No hagas `push` hasta que el usuario lo pida. Mientras no exista remoto de GitHub, el flujo es solo local.
- Si hay conflictos de fusión, detente, muestra los archivos en conflicto y pregunta antes de resolverlos.
- No uses `--force`, `reset --hard` ni `branch -D` sin confirmación. El borrado de ramas ya fusionadas con `-d` sí está autorizado de forma permanente (paso 6).
- No añadas atributos de coautoría a commits que no creaste tú.

## Cuando exista GitHub
- Primera subida: `git remote add origin <url>` y `git push -u origin master`, solo tras pedirlo.
- Las ramas `exp/...` se suben solo si el usuario lo pide.
