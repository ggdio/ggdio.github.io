import { useMemo } from 'react';

const WEEKS = 53;
const DAYS = 7;

const COLORS = [
  'rgba(255,255,255,0.04)',
  'rgba(10,102,194,0.28)',
  'rgba(10,102,194,0.5)',
  'rgba(10,102,194,0.75)',
  '#0A66C2',
];

const LIGHT_COLORS = [
  'rgba(0,0,0,0.05)',
  'rgba(10,102,194,0.25)',
  'rgba(10,102,194,0.45)',
  'rgba(10,102,194,0.7)',
  '#0A66C2',
];

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateActivity(seed = 42) {
  const rand = mulberry32(seed);
  const total = WEEKS * DAYS;
  const cells = new Array(total).fill(0);

  // Mark vacation gaps: 3 stretches of 7–14 contiguous days
  const gaps = [];
  for (let i = 0; i < 3; i++) {
    const start = Math.floor(rand() * (total - 14));
    const len = 7 + Math.floor(rand() * 8);
    gaps.push([start, start + len]);
  }
  const inGap = (idx) => gaps.some(([s, e]) => idx >= s && idx < e);

  // Today is the LAST cell — fill backwards so weekday/weekend math is correct
  const today = new Date();
  const todayDow = today.getDay(); // 0 (Sun) .. 6 (Sat)

  for (let i = 0; i < total; i++) {
    if (inGap(i)) { cells[i] = 0; continue; }

    // Day-of-week for this cell, walking backwards from today
    const offset = total - 1 - i;
    const dow = (todayDow - (offset % 7) + 7) % 7;
    const isWeekend = dow === 0 || dow === 6;

    const r = rand();
    let intensity;
    if (isWeekend) {
      // Weekends sparse: ~70% empty, occasional small commits
      if (r > 0.78) intensity = r > 0.94 ? 3 : r > 0.88 ? 2 : 1;
      else intensity = 0;
    } else {
      // Weekdays dense: ~85% active, lean toward medium-high
      if (r > 0.15) {
        if (r > 0.92) intensity = 4;
        else if (r > 0.75) intensity = 3;
        else if (r > 0.45) intensity = 2;
        else intensity = 1;
      } else {
        intensity = 0;
      }
    }
    cells[i] = intensity;
  }

  return cells;
}

function buildMonthLabels() {
  const labels = [];
  const today = new Date();
  const todayDow = today.getDay();
  const totalDays = WEEKS * DAYS;
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    // First day of this column (top row = Sunday-ish)
    const cellIdx = w * DAYS;
    const offset = totalDays - 1 - cellIdx;
    const date = new Date(today);
    date.setDate(today.getDate() - offset + ((todayDow + 6) % 7) - 6);
    const m = date.getMonth();
    if (m !== lastMonth && date.getDate() <= 7) {
      labels.push({ col: w, label: date.toLocaleString('en', { month: 'short' }) });
      lastMonth = m;
    }
  }
  return labels;
}

export function SyntheticHeatmap({ seed = 42, theme = 'dark' }) {
  const cells = useMemo(() => generateActivity(seed), [seed]);
  const months = useMemo(() => buildMonthLabels(), []);
  const palette = theme === 'light' ? LIGHT_COLORS : COLORS;

  return (
    <div className="w-full">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
          gap: 3,
          marginBottom: 6,
        }}
      >
        {Array.from({ length: WEEKS }).map((_, w) => {
          const m = months.find(x => x.col === w);
          return (
            <div
              key={w}
              className="text-[9px] text-app-text-dim font-medium text-left"
              style={{ height: 12 }}
            >
              {m?.label ?? ''}
            </div>
          );
        })}
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
          gridTemplateRows: `repeat(${DAYS}, 1fr)`,
          gridAutoFlow: 'column',
          gap: 3,
        }}
      >
        {cells.map((v, i) => (
          <div
            key={i}
            className="rounded-[2px]"
            style={{ aspectRatio: '1 / 1', background: palette[v] }}
          />
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 text-[10px] text-app-text-dim">
        <span>Less</span>
        {palette.map((c, i) => (
          <span key={i} className="w-2.5 h-2.5 rounded-[2px]" style={{ background: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
