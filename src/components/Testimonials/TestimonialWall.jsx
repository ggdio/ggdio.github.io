import linkedinData from '../../data/linkedinData.json';
import { RecommendationCard } from './RecommendationCard';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../hooks/useLanguage';

export function TestimonialWall() {
  const recommendations = linkedinData.recommendations || [];
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-3/5 h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,102,194,0.08) 0%, transparent 70%)' }}
      />
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow={t.endorsements.eyebrow}
          title={t.endorsements.title}
          highlight={t.endorsements.titleHighlight}
          subtitle={t.endorsements.subtitle}
        />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {recommendations.map((rec, i) => (
            <RecommendationCard key={rec.id ?? i} recommendation={rec} />
          ))}
        </div>
      </div>
    </section>
  );
}
