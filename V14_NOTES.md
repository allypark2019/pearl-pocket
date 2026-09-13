# V14 — Small Screen + Clear Sessions

- Projects UI enlarged for phone-sized / cyberdeck displays.
- Removed prominent percentage progress numbers; cards now show completed tasks as `done / total` plus a visual bar.
- Project overview uses plain-language task progress.
- Creative Session now starts a real visible timer instead of immediately recording the selected duration.
- Starting a session returns to the project shelf and displays a persistent high-contrast `CREATIVE SESSION RUNNING` panel with elapsed time and a large `FINISH SESSION` button.
- Finishing a session records actual elapsed minutes (minimum 1 minute in prototype).
- Enlarged buttons, tabs, metadata, project cards, stats, achievements, forms, tasks, and modal text for ~390px displays.
- Mobile tabs/filter rows scroll horizontally rather than shrinking labels.

Build note: dependency installation was unavailable in the packaging environment, so the Vite build could not be re-run here.
