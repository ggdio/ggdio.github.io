import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import linkedinData from '../../data/linkedinData.json';
import { ExperienceCard } from './ExperienceCard';
import { CompactExperienceCard } from './CompactExperienceCard';
import { useLanguage } from '../../hooks/useLanguage';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('highlights');
  const { language, t } = useLanguage();
  const { experience } = resumeData[language];

  const fullHistory = linkedinData.experiences || [];

  return (
    <section className="py-20 relative" id="experience">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-app-text mb-4">
            {t.experience.title} <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-app-text-muted text-lg max-w-2xl">
            {activeTab === 'highlights'
              ? t.experience.highlightsSubtitle
              : t.experience.fullSubtitle}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center p-1 bg-app-glass rounded-full border border-app-border w-fit shrink-0">
          <button
            onClick={() => setActiveTab('highlights')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'highlights'
                ? 'bg-brand text-app-text shadow-lg'
                : 'text-app-text-muted hover:text-app-text'
            }`}
          >
            {t.experience.highlights}
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'full'
                ? 'bg-brand text-app-text shadow-lg'
                : 'text-app-text-muted hover:text-app-text'
            }`}
          >
            {t.experience.fullTimeline}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'highlights' ? (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 relative before:absolute before:inset-y-0 before:left-[1rem] md:before:left-0 before:w-px before:bg-gradient-to-b before:from-brand/50 before:via-accent-violet/30 before:to-transparent pl-8 md:pl-10"
          >
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 md:-left-[2.85rem] top-8 w-4 h-4 rounded-full bg-brand border-4 border-app-bg z-20" />
                <ExperienceCard experience={exp} index={index} />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="full-history"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col">
              {fullHistory.map((exp, index) => (
                <CompactExperienceCard key={index} experience={exp} isDefaultExpanded={index === 0} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
