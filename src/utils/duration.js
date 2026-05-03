const MONTH_KEYS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parseYearMonth(value) {
  if (!value) return null;
  const [y, m] = value.split('-').map(Number);
  if (!y || !m) return null;
  return { year: y, month: m - 1 };
}

function formatMonthYear(date, t) {
  const monthLabel = t?.date?.[MONTH_KEYS[date.month]] ?? MONTH_KEYS[date.month];
  return `${monthLabel} ${date.year}`;
}

function diffYearsMonths(start, end) {
  let months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (months < 1) months = 1;
  return { years: Math.floor(months / 12), months: months % 12 };
}

export function formatDuration(startDate, endDate, t) {
  const start = parseYearMonth(startDate);
  if (!start) return '';

  const isPresent = !endDate;
  const end = isPresent
    ? (() => { const n = new Date(); return { year: n.getFullYear(), month: n.getMonth() }; })()
    : parseYearMonth(endDate);

  const startLabel = formatMonthYear(start, t);
  const endLabel = isPresent ? (t?.date?.Present ?? 'Present') : formatMonthYear(end, t);

  const { years, months } = diffYearsMonths(start, end);
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? (t?.date?.yr ?? 'yr') : (t?.date?.yrs ?? 'yrs')}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? (t?.date?.mo ?? 'mo') : (t?.date?.mos ?? 'mos')}`);
  if (parts.length === 0) parts.push(`1 ${t?.date?.mo ?? 'mo'}`);

  return `${startLabel} - ${endLabel} (${parts.join(' ')})`;
}
