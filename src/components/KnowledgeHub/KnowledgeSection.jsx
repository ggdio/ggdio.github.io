import { ArticleCard } from './ArticleCard';
import linkedinData from '../../data/linkedinData.json';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../hooks/useLanguage';

export function KnowledgeSection() {
  const { articles } = linkedinData;
  const { t } = useLanguage();

  return (
    <section id="knowledge-hub" className="relative py-24" style={{ background: 'var(--bg-primary)' }}>
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)' }}
      />
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow={t.knowledge.eyebrow}
          title={t.knowledge.title}
          highlight={t.knowledge.titleHighlight}
          subtitle={t.knowledge.subtitle}
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
