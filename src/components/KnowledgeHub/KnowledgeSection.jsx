import { motion } from 'framer-motion';
import { ArticleCard } from './ArticleCard';
import linkedinData from '../../data/linkedinData.json';

export function KnowledgeSection() {
  const { articles } = linkedinData;

  return (
    <section className="relative py-24" id="knowledge-hub">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-brand/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
            The <span className="text-gradient">Knowledge Hub</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Latest insights, technical deep-dives, and architectural perspectives directly from my LinkedIn publication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
