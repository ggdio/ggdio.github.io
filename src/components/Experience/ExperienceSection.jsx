import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import linkedinData from '../../data/linkedinData.json';
import { ExperienceCard } from './ExperienceCard';
import { CompactExperienceCard } from './CompactExperienceCard';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../hooks/useLanguage';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('highlights');
  const { language, t } = useLanguage();
  const { experience } = resumeData[language];
  const fullHistory = linkedinData.experiences || [];

  return (
    <section id="experience" className="relative py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)' }}
      />
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          highlight={t.experience.titleHighlight}
          subtitle={
            activeTab === 'highlights'
              ? t.experience.highlightsSubtitle
              : t.experience.fullSubtitle
          }
        />

        <div className="flex p-1 mb-10 rounded-full border border-app-border bg-app-glass w-fit">
          {[
            { id: 'highlights', label: t.experience.highlights },
            { id: 'full', label: t.experience.fullTimeline },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-brand text-white shadow-[0_2px_12px_rgba(10,102,194,0.4)]'
                  : 'text-app-text-dim hover:text-app-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'highlights' ? (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative pl-8"
            >
              <div
                className="absolute left-[5px] top-0 bottom-0 w-[2px]"
                style={{
                  background:
                    'linear-gradient(to bottom, var(--color-brand) 0%, rgba(139,92,246,0.4) 60%, transparent 100%)',
                }}
              />
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`absolute -left-[31px] top-2 w-3 h-3 rounded-full z-10 ${
                        index === 0 ? 'bg-brand' : 'bg-white/20'
                      }`}
                      style={{
                        border: '2px solid var(--bg-primary)',
                        boxShadow: index === 0 ? '0 0 0 3px rgba(10,102,194,0.2)' : 'none',
                      }}
                    />
                    <ExperienceCard experience={exp} index={index} />
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-[12px]"
            >
              <div className="flex flex-col">
                {fullHistory.map((exp, index) => (
                  <CompactExperienceCard key={index} experience={exp} isDefaultExpanded={index === 0} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
