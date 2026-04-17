# Titan Pickleball Drill Schedule

## What this is
A mobile-first training schedule for pickleball drill sessions using a Titan ACE ball machine. Built as a Vite + React app and deployed to GitHub Pages at https://nginsberg.github.io/weekly-training-schedule/ — opened on a phone at the court.

## Stack
- Vite + React 18 (JSX, no TypeScript)
- Inline styles via React style objects — no CSS framework, no CSS files
- DM Sans from Google Fonts (loaded via `<link>` inside the component)
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes to Pages on every push to `main`

## Files
- `src/WeeklySchedule.jsx` — the entire app. All state, data, styling, and components live here.
- `src/main.jsx` — React entrypoint, renders `<WeeklySchedule />`.
- `index.html` — shell with viewport meta + dark background so the page doesn't flash white on load.
- `vite.config.js` — sets `base: "/weekly-training-schedule/"` so asset paths resolve on GitHub Pages.

## Owner context
- **Player:** Navarre, Broomfield CO. COO at a startup, trains mornings before work (W/Th/F) and evenings (M).
- **Level:** Lower intermediate by DUPR (~3.4), but elite athletic background (ODP water polo goalie, D1 invite, nationally ranked D3 club goalie). 6'0" with 6'2"+ wingspan. Exceptional hands and reflexes at the kitchen — biggest gaps are serve (no spin yet), drives, soft game consistency, and 3rd shot drops.
- **Partner:** Nora also plays and may share the machine. She has basketball + gaming background.
- **Equipment:** Titan ACE pickleball machine (not the ONE), 2x Ryobi 18V 6Ah batteries, 100 Lifetime outdoor balls, ball basket for serve practice.
- **Coach:** Weekly lesson on Tuesdays (afternoon). Curriculum so far: serve, return, 3rd shot decision-making (drive vs drop), dinking (12 kitchen zones), basic kitchen movement.
- **Goal:** 4.5+ DUPR as fast as possible. Currently going 20-4 in 3.0-3.6 open play after 10 weeks.

## Schedule structure
The week is structured around the coaching lesson on Tuesday:
- **Monday:** Pre-open-play drill (5:00-6:15 PM) focused on serve + returns, then 7 PM open play
- **Tuesday:** Morning open play + afternoon coaching lesson (no drilling)
- **Wednesday:** Morning drill (7:00-8:15 AM) — FLEX SLOT based on Tuesday's lesson + 3rd shots, then lift
- **Thursday:** Morning drill (7:00-8:15 AM) — dinking deep work + reset drill, then lift
- **Friday:** Morning drill (7:00-8:00 AM) — decision-making + volleys
- **Saturday:** 15 min serve warmup + open play (3.0-3.6)
- **Sunday:** 15 min serve warmup + open play (3.0-3.6)

## Titan ACE placement positions
The Titan Drills Pro app supports 4 positions for pickleball: back-center, back-left, back-right, front-center. We primarily use two:
- **Back-center (far baseline):** For return-of-serve drills and the reset/goalie drill
- **Front-center (far kitchen line):** For 3rd shot drills, dinking, and volley work
- **Front-center offset:** For cross-court dink isolation (physically move the machine to one side of the kitchen line)

## Titan drill settings
Each drill in a Titan sequence is up to 6 shots with individual control over: speed, height, location, spin, and feed rate. The Pro app stores 24 drills on the machine with unlimited in "My Collection." Drills can be shared via QR code.

## How to make changes
All schedule content lives in the `weekSchedule` array at the top of `src/WeeklySchedule.jsx`. The shape:

- `weekSchedule[]` — one entry per day: `{ day, blocks }`
- `blocks[]` — one entry per session in that day: `{ time, type, label, duration, detail, note? }`
  - `type` is one of `drill` / `play` / `lesson` / `lift` (drives color coding via `typeColors`)
  - `detail` is `null` for play/lesson/lift sessions, or an object for drill sessions
- `detail` (drill sessions only): `{ warmup: { duration, content }, blocks: [...], cooldown }`
- `detail.blocks[]` — each drill inside a drill session: `{ name, duration, reps, titan, focus, levelUp }`
  - `titan` is a single string describing machine position AND player position AND settings (speed/height/feed/direction). Always specify both ends — where the Titan sits and where the player stands.
  - `titan: null` is valid when the drill uses a ball basket instead of the machine.

Other things to update when scope changes:
- `weekSummary` object inside `WeeklySchedule()` — drill/play/lift/lesson hours and PB-days count. Update if total hours shift.
- `typeColors` — only change if adding a new session type.
- Keep the mobile-first dark theme, DM Sans font, and accordion UI pattern intact.

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml` which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. Typical turnaround ~30-60s. No manual deploy step.

## Common update scenarios
1. **After a coaching lesson:** Update Wednesday's flex slot drill with whatever the coach covered
2. **Adding a new skill:** Add a new drill to the appropriate day's session, or create a new session block
3. **Progressing a drill:** Move current settings to the base and put new progressions in `levelUp`
4. **Schedule change:** Adjust times, swap days, add/remove blocks
5. **Adding Nora's drills:** Could add a toggle or separate view for her drill plan

## Design rules
- Dark theme only (var(--bg) #0d1117)
- Mobile-first — everything must be tappable and readable on phone at the court
- Accordion pattern for drill details — collapsed by default, tap to expand
- Placement notes (📍) in every drill block
- Titan settings (⚙️) with specific speed/height/feed/direction
- Color coding: blue=drill, green=play, purple=lesson, orange=lift
- Styles are inline React style objects — do not introduce a CSS file or framework without good reason
- Keep the dependency surface minimal: React + React DOM + Vite + `@vitejs/plugin-react`. Don't add UI libs, state libs, or routing — this is one screen
