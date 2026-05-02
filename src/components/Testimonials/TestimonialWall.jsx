import linkedinData from '../../data/linkedinData.json';
import { RecommendationCard } from './RecommendationCard';
import { useLanguage } from '../../hooks/useLanguage';

export function TestimonialWall() {
  const recommendations = linkedinData.recommendations || [];
  const { t } = useLanguage();

  return (
    <section className="py-20 relative" id="testimonials">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-app-text mb-4">
          {t.endorsements.title} <span className="text-gradient">{t.endorsements.titleHighlight}</span>
        </h2>
        <p className="text-app-text-muted text-lg max-w-2xl">
          {t.endorsements.subtitle}
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.id} recommendation={rec} />
        ))}
      </div>
    </section>
  );
}
