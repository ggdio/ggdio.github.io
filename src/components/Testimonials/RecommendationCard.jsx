function getInitials(name) {
  if (!name) return '?';
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name[0].toUpperCase();
}

export function RecommendationCard({ recommendation }) {
  return (
    <div
      className="glass break-inside-avoid mb-5 px-6 py-5 rounded-[12px] transition-colors hover:border-accent-violet/30"
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      <div className="flex items-start gap-3 mb-3.5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display text-[15px] font-bold text-app-text-muted shrink-0 border border-app-border"
          style={{
            background: 'linear-gradient(135deg, rgba(10,102,194,0.15), rgba(139,92,246,0.15))',
          }}
        >
          {getInitials(recommendation.name)}
        </div>
        <div>
          <div className="font-display text-sm font-bold text-app-text leading-tight">
            {recommendation.name}
          </div>
          <div className="text-[11px] text-app-text-dim mt-0.5">{recommendation.role}</div>
        </div>
      </div>
      <p className="text-[13px] text-app-text-muted leading-[1.7]">
        <span
          className="text-brand font-display"
          style={{ fontSize: 18, lineHeight: 0, verticalAlign: -4, marginRight: 2 }}
        >
          “
        </span>
        {recommendation.feedback}
      </p>
    </div>
  );
}
