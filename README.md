# Ally Archive Mermaid V12 — Projects Prototype

This is a separate successor to the clean V11 baseline. V11 was not overwritten.

## Run locally

1. Open a terminal in the `project` folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address Vite prints.

The app uses sample data and does not require a backend. Project and session types
live in `src/data/projects.ts`, keeping the UI separate from the future persistence
layer so the sample repository can later be replaced by local SQLite.

## Validation

- `npm run typecheck`
- `npm run build`
- `npm run lint`

All three commands passed when this package was created.

<!-- Deployment trigger: Vercel initial production build -->
