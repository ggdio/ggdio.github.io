import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import linkedinData from '../../data/linkedinData.json';
import { ExperienceCard } from './ExperienceCard';
import { CompactExperienceCard } from './CompactExperienceCard';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('highlights');

  const fullHistory = linkedinData.experiences || [];

  return (
    <section className="py-20 relative" id="experience">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            {activeTab === 'highlights' 
              ? "Highlights from my career leading data, architecture, and technology teams across global enterprises."
              : "A comprehensive timeline of my roles and contributions over the past 19+ years."}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center p-1 bg-white/5 rounded-full border border-white/10 w-fit shrink-0">
          <button
            onClick={() => setActiveTab('highlights')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'highlights' 
                ? 'bg-brand text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Highlights
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'full' 
                ? 'bg-brand text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Full Timeline
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
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 md:-left-[2.85rem] top-8 w-4 h-4 rounded-full bg-brand border-4 border-bg-dark z-20" />
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
                <CompactExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
