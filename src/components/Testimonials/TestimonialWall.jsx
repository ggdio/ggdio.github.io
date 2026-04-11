import linkedinData from '../../data/linkedinData.json';
import { RecommendationCard } from './RecommendationCard';

export function TestimonialWall() {
  const recommendations = linkedinData.recommendations || [];

  return (
    <section className="py-20 relative" id="testimonials">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Professional <span className="text-gradient">Endorsements</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Reflections and feedback from leaders, peers, and clients throughout my career journey.
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
