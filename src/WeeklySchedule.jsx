import { useState } from "react";

const weekSchedule = [
  {
    day: "Monday",
    blocks: [
      {
        time: "5:00 – 6:15 PM",
        type: "drill",
        label: "Titan Session — Serve + Returns",
        duration: "75 min",
        detail: {
          warmup: {
            duration: "10 min",
            content: "Serve practice with ball basket. 30 drop serves (focus: depth past service box midline), then 20 volley serves (focus: brush up the back of the ball, feel the spin). No targets yet — just grooves."
          },
          blocks: [
            {
              name: "Deep Return",
              duration: "20 min",
              reps: "~60 balls × 2 loads",
              titan: "Baseline center → you at return position. Speed 30-40 mph, medium height, 8 sec feed, alternating FH/BH.",
              focus: "Split step on feed. Return deep cross-court past kitchen line. Reset to ready position between every ball.",
              levelUp: "Speed to 45-50 mph. Feed rate to 6 sec."
            },
            {
              name: "Return + Approach",
              duration: "15 min",
              reps: "~45 balls",
              titan: "Baseline center → you. Speed 35 mph, medium height, 10 sec feed, center/BH.",
              focus: "Return deep, then sprint forward to kitchen line before next feed. This is return as a TRANSITION shot, not a standalone. Track: how often do you reach the line before next ball?",
              levelUp: "Feed to 7 sec — forces faster movement."
            },
            {
              name: "Pressure Serve Finish",
              duration: "10 min",
              reps: "30 balls from basket",
              titan: null,
              focus: "Call out a score before each serve. Alternate sides. Track your make %. Target: 85% in, then 85% deep.",
              levelUp: "Add placement targets (deep BH corner). Volley serves only."
            }
          ],
          cooldown: "5 min — light stretching, note what felt off to bring up with coach Tuesday."
        }
      },
      {
        time: "7:00 PM",
        type: "play",
        label: "3.0–3.3 Open Play",
        duration: "~90 min",
        detail: null
      }
    ]
  },
  {
    day: "Tuesday",
    blocks: [
      {
        time: "Morning",
        type: "play",
        label: "3.0–3.3 Open Play",
        duration: "~90 min",
        detail: null
      },
      {
        time: "Afternoon",
        type: "lesson",
        label: "Coaching Lesson",
        duration: "~60 min",
        detail: null,
        note: "After your lesson, note what your coach introduced or corrected. Wednesday's drill session will be built around this."
      }
    ]
  },
  {
    day: "Wednesday",
    blocks: [
      {
        time: "7:00 – 8:15 AM",
        type: "drill",
        label: "Titan Session — Lesson Follow-Up + 3rd Shots",
        duration: "75 min",
        detail: {
          warmup: {
            duration: "10 min",
            content: "15 volley serves from basket (working the spin). Then jog/shuffle along the kitchen line to warm up lateral movement."
          },
          blocks: [
            {
              name: "Lesson Drill (Flex Slot)",
              duration: "20 min",
              reps: "Whatever your coach covered Tuesday",
              titan: "Configure based on Tuesday's lesson focus. This slot is intentionally blank — you fill it in after each lesson.",
              focus: "Take whatever your coach corrected or introduced and get 200+ reps before you forget the feel. This is the highest-value 20 min of your week.",
              levelUp: "Ask your coach for specific Titan settings if applicable."
            },
            {
              name: "3rd Shot Drop — Cross Court",
              duration: "20 min",
              reps: "Full hopper × 2 loads",
              titan: "Kitchen line center → you at baseline. Speed 25-30 mph, medium-low height, 6 sec feed, fixed to your FH.",
              focus: "Soft drop into kitchen. Ball should arc over net with minimal pace and bounce twice before back kitchen line. Aim cross-court. Paddle face open, lift under the ball, follow through toward target.",
              levelUp: "Switch to BH drops. Then alternate FH/BH with 2-line oscillation."
            },
            {
              name: "3rd Shot Drive — Punish Short Returns",
              duration: "15 min",
              reps: "~50 balls",
              titan: "Kitchen line center → you at baseline. Speed 20-25 mph, medium-HIGH height (simulate short/high return), 6 sec feed, center.",
              focus: "Step INTO the ball. Topspin drive aimed at feet of where net player would be. Closed paddle face, low-to-high swing path.",
              levelUp: "Increase to 30-35 mph. Mix with drops using the decision drill."
            }
          ],
          cooldown: "5 min stretch."
        }
      },
      {
        time: "8:30 – 9:30 AM",
        type: "lift",
        label: "Lift — Upper Body + Core",
        duration: "60 min",
        detail: null,
        note: "Upper/core emphasis. Shoulder stability, rotational core, grip strength — all directly transfer to paddle sports."
      }
    ]
  },
  {
    day: "Thursday",
    blocks: [
      {
        time: "7:00 – 8:15 AM",
        type: "drill",
        label: "Titan Session — Dinking Deep Work",
        duration: "75 min",
        detail: {
          warmup: {
            duration: "10 min",
            content: "20 volley serves from basket. Then set Titan to low-speed kitchen feeds and just rally loose dinks for 5 min to calibrate your touch."
          },
          blocks: [
            {
              name: "Zone Isolation — Cross Court",
              duration: "25 min",
              reps: "20 per zone, 6 zones (120 balls)",
              titan: "Kitchen line, offset to one side → you at kitchen. Speed 10-15 mph, low height (just over net), 4 sec feed, fixed direction to your FH.",
              focus: "Place cones/towels in 6 cross-court kitchen zones. Hit 20 dinks to zone 1, track makes, move to zone 2. This is tedious. That's the point. Target: 15/20 per zone.",
              levelUp: "Do all 6 BH cross-court zones. Then down-the-line. Then randomize targets."
            },
            {
              name: "Dink & Move",
              duration: "15 min",
              reps: "Full hopper",
              titan: "Kitchen line center → you at kitchen. Speed 12-18 mph, low height, 3-4 sec feed, 2-line oscillation (FH/BH).",
              focus: "Shuffle along kitchen line. Dink each ball back cross-court. Feet first, then paddle. Stay balanced with paddle out front. Don't reach — MOVE.",
              levelUp: "Wider oscillation. Feed rate to 3 sec. Add light spin from machine."
            },
            {
              name: "Reset Drill — Goalie Mode",
              duration: "15 min",
              reps: "~50 balls",
              titan: "Baseline center → you at kitchen line. Speed 35-45 mph, medium-low height (drives AT you), 5 sec feed, center/body.",
              focus: "YOUR drill. Machine fires drives at you. Absorb with soft grip, redirect into kitchen. Paddle out front, loose hands, catch it like it's a shot on goal and redirect. No backswing — just absorb and place.",
              levelUp: "Speed to 50+. Direction to FH, BH, and body. This will become your signature skill."
            }
          ],
          cooldown: "5 min stretch. Note zone accuracy numbers."
        }
      },
      {
        time: "8:30 – 9:30 AM",
        type: "lift",
        label: "Lift — Lower Body + Lateral",
        duration: "60 min",
        detail: null,
        note: "Legs, lateral agility, hip mobility. Split step explosiveness, lateral shuffle endurance. You'll feel this during Friday's session — that's fine."
      }
    ]
  },
  {
    day: "Friday",
    blocks: [
      {
        time: "7:00 – 8:00 AM",
        type: "drill",
        label: "Titan Session — Decision Making + Volleys",
        duration: "60 min",
        detail: {
          warmup: {
            duration: "5 min",
            content: "Light kitchen dinks on the machine to wake up your hands."
          },
          blocks: [
            {
              name: "Drop/Drive Decision Drill",
              duration: "20 min",
              reps: "Full hopper × 2",
              titan: "Kitchen line center → you at baseline. 6-shot sequence: 3 balls high/short (20-25 mph, high), 3 balls low/deep (30 mph, medium-low). 7 sec feed. Oscillating.",
              focus: "High ball = DRIVE. Low ball = DROP. Read the feed and choose. Don't predetermine — react to each ball. This is the core 3rd shot skill.",
              levelUp: "Shuffle mode so the sequence randomizes. You can't predict — you just read and react."
            },
            {
              name: "Volley Rapid Fire",
              duration: "15 min",
              reps: "Full hopper",
              titan: "Kitchen line center → you at kitchen. Speed 20-30 mph, medium height (net to chest), 2-3 sec feed, 2-line oscillation.",
              focus: "Fast hands. Paddle up at 10 o'clock. PUNCH — don't swing. Short compact motion. Reset to ready between every ball. This is the cage.",
              levelUp: "Speed up. Feed to 2 sec. Add 3rd line (center). Pure reaction training."
            },
            {
              name: "Put-Away Practice",
              duration: "15 min",
              reps: "~50 balls",
              titan: "Kitchen line center → you at kitchen. Speed 15-20 mph, HIGH (pop-ups above net), 5 sec feed, slight oscillation.",
              focus: "High ball = step in and finish the point. Aim at feet/body of where opponents would stand. At your height and reach, anything above the tape is a kill shot. Practice the aggression.",
              levelUp: "Mix high (attack) and low (reset) in one 6-shot sequence. Trains the read — not every ball is attackable."
            }
          ],
          cooldown: "5 min. End-of-week check: what improved, what needs more work next week?"
        }
      }
    ]
  },
  {
    day: "Saturday",
    blocks: [
      {
        time: "Pre-play",
        type: "drill",
        label: "Serve Warmup",
        duration: "15 min",
        detail: {
          warmup: { duration: "15 min", content: "Arrive 15 min early. Ball basket. 20 volley serves working spin. 10 pressure serves (call scores). Get the motion warm before games." },
          blocks: []
        }
      },
      {
        time: "Morning / Midday",
        type: "play",
        label: "3.0–3.6 Open Play",
        duration: "2-3 hrs",
        detail: null,
        note: "Game day. Apply what you drilled all week. Focus on ONE thing per session — don't try to fix everything at once in games. Pick a theme: 'today I'm hitting every 3rd shot drop cross-court' or 'today I'm driving every short return.'"
      }
    ]
  },
  {
    day: "Sunday",
    blocks: [
      {
        time: "Pre-play",
        type: "drill",
        label: "Serve Warmup",
        duration: "15 min",
        detail: {
          warmup: { duration: "15 min", content: "Same as Saturday. 20 volley serves + 10 pressure. Track your spin progress week over week." },
          blocks: []
        }
      },
      {
        time: "Morning / Midday",
        type: "play",
        label: "3.0–3.6 Open Play",
        duration: "2-3 hrs",
        detail: null,
        note: "Different focus theme than Saturday. If yesterday was '3rd shot drops,' today is 'aggressive returns + quick transition to kitchen.'"
      }
    ]
  }
];

const typeColors = {
  drill: { bg: "rgba(88,166,255,0.10)", border: "#58a6ff", text: "#58a6ff", tag: "DRILL" },
  play: { bg: "rgba(126,231,135,0.10)", border: "#7ee787", text: "#7ee787", tag: "PLAY" },
  lesson: { bg: "rgba(210,153,255,0.10)", border: "#d2a8ff", text: "#d2a8ff", tag: "LESSON" },
  lift: { bg: "rgba(255,166,87,0.10)", border: "#ffa657", text: "#ffa657", tag: "LIFT" },
};

function DrillBlock({ block: b }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "var(--card-bg)",
      border: `1px solid ${typeColors[b.type].border}22`,
      borderLeft: `3px solid ${typeColors[b.type].border}`,
      borderRadius: 8,
      marginBottom: 10,
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "12px 16px", flexWrap: "wrap" }}>
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: typeColors[b.type].text,
          background: typeColors[b.type].bg,
          padding: "3px 8px",
          borderRadius: 4,
          flexShrink: 0,
        }}>{typeColors[b.type].tag}</span>
        <span style={{ fontSize: 13, color: "var(--text-muted)", flexShrink: 0 }}>{b.time}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", flex: 1 }}>{b.label}</span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", flexShrink: 0 }}>{b.duration}</span>
        {(b.detail || b.note) && (
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)",
            fontSize: 11, padding: "2px 6px", transform: open ? "rotate(180deg)" : "", transition: "transform 0.2s",
          }}>▼</button>
        )}
      </div>
      {open && b.detail && (
        <div style={{ padding: "0 16px 14px", fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
          {b.detail.warmup && (
            <div style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: 6,
              padding: "10px 14px",
              marginBottom: 12,
            }}>
              <span style={{ fontWeight: 700, color: "var(--accent)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Warmup — {b.detail.warmup.duration}
              </span>
              <div style={{ marginTop: 4 }}>{b.detail.warmup.content}</div>
            </div>
          )}
          {b.detail.blocks.map((drill, i) => (
            <div key={i} style={{
              borderBottom: i < b.detail.blocks.length - 1 ? "1px solid var(--border)" : "none",
              paddingBottom: 12,
              marginBottom: 12,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>
                  <span style={{
                    color: "var(--accent)", fontWeight: 700, fontSize: 12,
                    background: "var(--accent-dim)", borderRadius: 4, padding: "2px 7px", marginRight: 8,
                  }}>{i + 1}</span>
                  {drill.name}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{drill.duration} • {drill.reps}</span>
              </div>
              {drill.titan && (
                <div style={{
                  background: "rgba(88,166,255,0.05)",
                  borderRadius: 5,
                  padding: "8px 12px",
                  marginBottom: 8,
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}>
                  <span style={{ fontWeight: 700, color: "var(--accent)" }}>⚙️ Titan: </span>{drill.titan}
                </div>
              )}
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 600, color: "var(--accent)" }}>Focus: </span>{drill.focus}
              </div>
              <div style={{
                padding: "8px 10px",
                background: "rgba(88,166,255,0.03)",
                borderLeft: "2px solid var(--accent)",
                borderRadius: 4,
                fontSize: 12,
              }}>
                <span style={{ fontWeight: 700, color: "var(--accent)" }}>↑ Level Up: </span>{drill.levelUp}
              </div>
            </div>
          ))}
          {b.detail.cooldown && (
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
              {b.detail.cooldown}
            </div>
          )}
        </div>
      )}
      {open && b.note && !b.detail && (
        <div style={{ padding: "0 16px 12px", fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>
          {b.note}
        </div>
      )}
      {open && b.note && b.detail && (
        <div style={{ padding: "0 16px 12px", fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>
          {b.note}
        </div>
      )}
    </div>
  );
}

export default function WeeklySchedule() {
  const [activeDay, setActiveDay] = useState(0);
  const day = weekSchedule[activeDay];

  const weekSummary = {
    drillHours: "5.5 hrs",
    playHours: "~9 hrs",
    liftHours: "2 hrs",
    lesson: "1 hr",
    total: "~17.5 hrs",
    pickleballDays: "7/7",
  };

  return (
    <div style={{
      "--bg": "#0d1117",
      "--card-bg": "#161b22",
      "--border": "#30363d",
      "--text": "#e6edf3",
      "--text-secondary": "#c9d1d9",
      "--text-muted": "#8b949e",
      "--accent": "#58a6ff",
      "--accent-dim": "rgba(88,166,255,0.12)",
      fontFamily: "'DM Sans', sans-serif",
      color: "var(--text)",
      background: "var(--bg)",
      minHeight: "100vh",
      padding: "24px 16px",
      maxWidth: 740,
      margin: "0 auto",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.03em" }}>
          Weekly Training Schedule
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
          Starting Monday • Titan ACE + coaching + open play
        </p>
      </div>

      {/* Week summary bar */}
      <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 22,
        flexWrap: "wrap",
      }}>
        {[
          { label: "Drill", value: weekSummary.drillHours, color: "#58a6ff" },
          { label: "Play", value: weekSummary.playHours, color: "#7ee787" },
          { label: "Lift", value: weekSummary.liftHours, color: "#ffa657" },
          { label: "Lesson", value: weekSummary.lesson, color: "#d2a8ff" },
          { label: "PB Days", value: weekSummary.pickleballDays, color: "#f0883e" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "8px 12px",
            flex: "1 1 auto",
            minWidth: 80,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: s.color, marginTop: 2 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Day tabs */}
      <div style={{
        display: "flex",
        gap: 4,
        marginBottom: 18,
        overflowX: "auto",
        paddingBottom: 4,
      }}>
        {weekSchedule.map((d, i) => {
          const dayTypes = d.blocks.map(b => b.type);
          const hasMultiple = dayTypes.length > 1;
          return (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              style={{
                padding: "10px 14px",
                background: activeDay === i ? "var(--accent)" : "var(--card-bg)",
                color: activeDay === i ? "#0d1117" : "var(--text-muted)",
                border: activeDay === i ? "none" : "1px solid var(--border)",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: activeDay === i ? 800 : 500,
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                minWidth: 58,
              }}
            >
              <span>{d.day.slice(0, 3)}</span>
              <div style={{ display: "flex", gap: 3 }}>
                {[...new Set(dayTypes)].map(t => (
                  <span key={t} style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: activeDay === i ? "#0d1117" : typeColors[t].border,
                    opacity: activeDay === i ? 0.5 : 0.7,
                  }} />
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Day content */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.02em" }}>
          {day.day}
        </h2>
        {day.blocks.map((block, i) => (
          <DrillBlock key={i} block={block} />
        ))}
      </div>

      {/* Legend */}
      <div style={{
        display: "flex",
        gap: 16,
        padding: "12px 16px",
        background: "var(--card-bg)",
        borderRadius: 8,
        border: "1px solid var(--border)",
        flexWrap: "wrap",
        marginTop: 20,
      }}>
        {Object.entries(typeColors).map(([type, c]) => (
          <div key={type} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: c.border }} />
            <span style={{ color: "var(--text-muted)", textTransform: "capitalize" }}>{type}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 20,
        padding: "14px 16px",
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.7,
        color: "var(--text-secondary)",
      }}>
        <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>📌 Week-over-week</div>
        <div style={{ marginBottom: 4 }}>→ <strong>Week 1-2:</strong> 60 min drill sessions. Learn the Titan, calibrate settings, find your baseline accuracy numbers.</div>
        <div style={{ marginBottom: 4 }}>→ <strong>Week 3-4:</strong> Push to 75 min. Add "Level Up" progressions. Start tracking zone accuracy %.</div>
        <div style={{ marginBottom: 4 }}>→ <strong>Week 5+:</strong> 90 min sessions. Introduce shuffle/random modes. Start building custom drills from coach feedback.</div>
        <div>→ <strong>Wednesday flex slot</strong> updates every week based on Tuesday's lesson. This is the engine of the whole plan.</div>
      </div>
    </div>
  );
}
