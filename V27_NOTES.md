# V27 Consolidation Pass

This pass intentionally consolidates the approved visual behavior instead of adding new systems.

Implemented:
- Boot state forced on page lifecycle and `pageshow`; StrictMode removed to avoid duplicate effect lifecycles; boot duration increased so the sequence is visible.
- Cursor selector rebuilt as Shell / Otter / Ashe portrait tokens; no star or half-circle.
- Cursor portraits are transparent PNGs; full cursor-following sprites remain separate assets and are reduced in size.
- Home decorative sparkle clutter removed.
- Home cards remain clean at rest; environmental art appears only on actual hover/focus.
- Approved static hover environments integrated for Encyclopedia / Project Lab / Creature Index / Visitor Log.
- Hover icons are static swaps; Creature Index specifically uses manta IDLE at rest and SWIM 1 on hover.
- V11 heart styling + two-step vertical bob restored inside safe card bounds.
- Decide For Me rebuilt around the approved moonlit-ocean scenery; legacy moon/stripe/stage layers are forcibly removed by the final stylesheet block.
- Wizard is larger and uses distinct expression/pose PNGs; each consultation forces a different expressive state and retriggers the jump reaction.
- Wizard speech bubble originates beside the character.
- New Project wizard debug/state labels remain suppressed.
- Graveyard uses a text-free scenery crop only, softly blended as atmosphere on shelf and memorial view.

Verification performed:
- All TS/TSX files passed TypeScript `transpileModule` syntax parsing.
- Static source checks confirmed the final stylesheet references the new hover, cursor, Decide, and Graveyard assets.
- New cursor portrait PNGs were checked for alpha transparency.
- Graveyard scenery crop was visually checked to contain no baked-in source text.

Environment limitation:
- A full Vite production build could not be executed because the required npm packages are not available in the offline package cache in this runtime. No `node_modules` folder is included in this archive.
