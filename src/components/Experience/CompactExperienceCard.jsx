import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function CompactExperienceCard({ experience, isDefaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);
  const { t } = useLanguage();

  const getTranslatedDuration = (duration) => {
    if (!duration || !t.date) return duration;
    let translated = duration;
    Object.entries(t.date).forEach(([key, value]) => {
      translated = translated.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
    });
    return translated;
  };

  const location = experience.location?.split('·')[0].trim() ?? '';

  return (
    <div className="border-b border-app-border last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left focus:outline-none group/card hover:bg-app-glass transition-colors duration-150 px-5 py-4"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 text-app-text-dim group-hover/card:text-brand transition-colors"
            >
              <ChevronDown size={15} />
            </motion.div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-[14px] font-display font-semibold text-app-text group-hover/card:text-brand-light transition-colors truncate">
                  {experience.title || experience.role}
                </span>
                {location && (
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-app-glass border border-app-border text-app-text-dim shrink-0 max-w-[160px] truncate">
                    {location}
                  </span>
                )}
              </div>
              <p className="text-[13px] text-brand-light mt-0.5">{experience.company}</p>
            </div>
          </div>
          <span className="shrink-0 text-[12px] text-app-text-dim text-right whitespace-nowrap">
            {getTranslatedDuration(experience.duration || experience.period)}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-1 pl-12">
              <p className="text-[13px] text-app-text-muted leading-relaxed border-l-2 border-brand/20 pl-4 py-1">
                {experience.description}
              </p>
              {experience.location && (
                <p className="mt-1.5 text-[11px] text-app-text-dim pl-4">
                  {experience.location}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
