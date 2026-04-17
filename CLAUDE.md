# Titan Pickleball Drill Schedule

## What this is
A single-file HTML training schedule for pickleball drill sessions using a Titan ACE ball machine. Built for mobile-first use at the court. No build tools, no dependencies, no framework — just one HTML file with inline CSS and JS.

## The file
- `titan_drill_schedule.html` — the entire app. Everything is self-contained.

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
When updating the schedule:
- The entire app state is in a single `schedule` array in the `<script>` block
- Each day has `blocks`, each block has a `type` (drill/play/lesson/lift), and drill blocks have a `detail` object with `warmup`, `drills[]`, and `cooldown`
- Each drill has: `name`, `dur`, `reps`, `placement`, `titan` (settings string), `focus`, `levelUp`
- The `placement` field is critical — always specify where the Titan goes AND where the player stands
- Summary stats at the top (`stats` array) should be updated if total hours change
- Keep the mobile-first dark theme, DM Sans font, accordion UI pattern

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
- No external dependencies. No build step. Single file.
