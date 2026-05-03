import { motion } from 'framer-motion';
import { Cloud, Database, Cpu, Code, Users, HardDrive } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../hooks/useLanguage';

const ICONS = {
  leadership: Users,
  cloud: Cloud,
  data: Database,
  architecture: Cpu,
  storage: HardDrive,
  software: Code,
};

const ACCENT = {
  leadership: { color: 'var(--color-brand)', bg: 'rgba(10,102,194,0.15)', pill: 'pill-ghost' },
  cloud: { color: 'var(--color-brand)', bg: 'rgba(10,102,194,0.15)', pill: 'pill-blue' },
  data: { color: 'var(--color-accent-violet)', bg: 'rgba(139,92,246,0.15)', pill: 'pill-violet' },
  architecture: { color: 'var(--color-brand)', bg: 'rgba(10,102,194,0.15)', pill: 'pill-ghost' },
  storage: { color: 'var(--color-accent-green)', bg: 'rgba(52,211,153,0.15)', pill: 'pill-ghost' },
  software: { color: 'var(--color-brand)', bg: 'rgba(10,102,194,0.15)', pill: 'pill-blue' },
};

export function SkillsSection() {
  const { skills } = resumeData;
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-3/5 h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,102,194,0.08) 0%, transparent 70%)' }}
      />
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          highlight={t.skills.titleHighlight}
          subtitle={t.skills.subtitle}
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => {
            const Icon = ICONS[category];
            const a = ACCENT[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden p-6 rounded-[12px] transition-transform hover:-translate-y-0.5 glass"
                style={{ borderRadius: 'var(--radius-card)' }}
              >
                <div
                  className="absolute top-4 right-4 opacity-[0.08] pointer-events-none transition-all"
                  style={{ color: a.color }}
                >
                  <Icon size={64} strokeWidth={1} />
                </div>
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3.5"
                  style={{ background: a.bg }}
                >
                  <Icon size={18} strokeWidth={2} style={{ color: a.color }} />
                </div>
                <h3 className="font-display text-[17px] font-bold text-app-text mb-3.5">
                  {t.skills.categories[category]}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(skill => (
                    <span key={skill} className={`pill ${a.pill}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
