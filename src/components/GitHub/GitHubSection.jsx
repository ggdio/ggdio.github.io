import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import { SectionHeader } from '../ui/SectionHeader';
import { SyntheticHeatmap } from './SyntheticHeatmap';
import { useLanguage } from '../../hooks/useLanguage';

export function GitHubSection() {
  const { t } = useLanguage();
  const { github } = resumeData;

  return (
    <section id="github" className="relative py-24" style={{ background: 'var(--bg-primary)' }}>
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)' }}
      />
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow={t.github.eyebrow}
          title={t.github.title}
          highlight={t.github.titleHighlight}
          subtitle={t.github.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-7 items-start">
          <div>
            <div className="grid grid-cols-3 gap-3.5 mb-7">
              <Stat val={String(github.stats.repos)} label={t.github.repositories} />
              <Stat val={github.stats.yearsActive} label={t.github.yearsActive} />
              <Stat val="★" label={t.github.openSource} color="var(--color-accent-violet)" />
            </div>
            <div className="glass rounded-[12px] px-6 py-5">
              <div className="text-[11px] text-app-text-dim font-semibold uppercase tracking-[0.1em] mb-3.5">
                {t.github.contributions}
              </div>
              <div className="overflow-x-auto">
                <SyntheticHeatmap seed={1729} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[11px] text-app-text-dim font-semibold uppercase tracking-[0.1em] mb-1">
              {t.github.pinned}
            </div>
            {github.pinned.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass block px-4 py-4 rounded-lg transition-all hover:border-brand/30 hover:bg-app-glass2"
                style={{ borderRadius: 'var(--radius-btn)' }}
              >
                <div className="font-display text-sm font-bold text-brand-light mb-1">{repo.name}</div>
                <p className="text-xs text-app-text-muted leading-[1.5] mb-2.5">{repo.desc}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-app-text-dim">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: repo.color }} />
                  {repo.lang}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ val, label, color = 'var(--color-brand)' }) {
  return (
    <div className="glass rounded-lg px-4 py-3.5 text-center" style={{ borderRadius: 'var(--radius-btn)' }}>
      <div className="font-display text-[26px] font-extrabold leading-none" style={{ color }}>
        {val}
      </div>
      <div className="text-[11px] text-app-text-dim mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}
