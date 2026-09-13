# V17 — Living Archive

Built from V16 after the handheld usability / interaction brainstorm.

## Changes
- Creative Session simplified to project → start; timer counts upward until Finish Session.
- Starting a session from inside a project no longer kicks you out of the project or loses the timer.
- Project-page session button changes to a visible SESSION ACTIVE state.
- Project icons now follow a consistent category language instead of arbitrary symbols.
- Removed the editable arbitrary pixel-symbol field; category determines the icon.
- Project panel colors are much more visibly distinct (pink, coral, gold, blue), including edit swatches.
- Pearl Pocket device branding is larger and more defined.
- Cursor Companion is roomier; hovering a companion reveals its name and gives it a tiny wiggle.
- Home treasure cards use their empty space for larger icons, descriptions, useful previews, and a chunky OPEN control.
- Treasure hover/focus scenes added: knowledge chest/bubbles, Project Lab tools/sparks, Creature trail, Visitor Log hearts/ribbon.
- Boot sequence replaced with a short Otter-riding-a-wave scene; no fake loading text/progress bar.

## Validation
- TypeScript check (`npx tsc --noEmit`) passes.
- Full Vite build could not be run in this container because the ZIP does not include the local Vite executable/node_modules.
