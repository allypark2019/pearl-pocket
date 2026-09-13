# V13 Editable Projects Pass

Added without changing the V11/V12 pixel-art visual language:

- New Project modal
- Edit Project modal
- Persistent project data in browser localStorage
- Add/toggle/delete project tasks
- Add/delete notes
- Add/toggle/delete supplies and costs
- Gallery image picker with local browser storage for prototype testing
- Clearer Spark / obsession meter (1–5)
- Clearer task progress percentage and quest count
- Creative sessions now append to the project log

## Image storage
For this browser prototype, selected images are encoded as local data URLs and saved with project data in localStorage. This is intentionally a prototype implementation and browser storage is limited.

For a physical cyberdeck, keep the same Gallery UI but replace the storage adapter with local filesystem storage (for example `/home/ally/Archive/project-media/<project-id>/`) and store only image file paths in SQLite/project records.

## Build verification
The source ZIP did not include node_modules. An npm dependency install could not complete in the sandbox, so the final Vite build could not be executed here. Run `npm install` / `npm run dev` locally as usual and report any compiler/runtime error for a patch.
