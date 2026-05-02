import { motion } from 'framer-motion';
import { Tag } from '../ui/Tag';
import { ExternalLinkButton } from '../ui/ExternalLinkButton';

export function ArticleCard({ article }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden transition-colors rounded-2xl glass hover:bg-app-glass border-gradient"
    >
      <div className="relative overflow-hidden aspect-video group">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-app-bg/80 to-transparent" />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        
        <h3 className="mb-2 text-xl font-bold leading-tight text-app-text font-display line-clamp-2">
          {article.title}
        </h3>
        
        <p className="flex-grow mb-6 text-sm leading-relaxed text-app-text-muted line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="mt-auto">
          <ExternalLinkButton href={article.url} className="justify-center w-full">
            Read on LinkedIn
          </ExternalLinkButton>
        </div>
      </div>
    </motion.div>
  );
}
