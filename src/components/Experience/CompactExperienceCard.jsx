import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function CompactExperienceCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-2 border-b border-app-border last:border-0 group relative">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left focus:outline-none group/card"
        aria-expanded={isExpanded}
      >
        {/* Subtle hover background */}
        <div className="absolute inset-x-0 inset-y-1 bg-app-glass/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mx-4 px-4 rounded-lg" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between text-sm gap-2 md:gap-4 py-3">
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-app-text-muted/60 group-hover/card:text-brand transition-colors"
            >
              <ChevronDown size={16} />
            </motion.div>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-display font-medium text-app-text group-hover/card:text-brand-light transition-colors">
                  {experience.title || experience.role}
                </h3>
                {experience.location && (
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-app-glass border border-app-border text-app-text-muted">
                    {experience.location.split('·')[0].trim()}
                  </span>
                )}
              </div>
              <p className="text-brand-light font-medium">{experience.company}</p>
            </div>
          </div>
          <div className="shrink-0 text-left md:text-right pl-7 md:pl-0">
            <span className="text-app-text-muted">{experience.duration || experience.period}</span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-7 pb-4">
              <p className="text-app-text-muted text-sm leading-relaxed border-l-2 border-brand/20 pl-4 py-1">
                {experience.description}
              </p>
              {experience.location && experience.location.includes('·') && (
                <p className="mt-2 text-[10px] text-app-text-muted/60 italic pl-5">
                  Full Location: {experience.location}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
