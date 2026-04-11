import { motion } from 'framer-motion';
import { Cloud, Database, Cpu, Code, Users, HardDrive } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { Tag } from '../ui/Tag';

const iconMap = {
  leadership: <Users className="stroke-brand w-8 h-8" />,
  cloud: <Cloud className="stroke-brand w-8 h-8" />,
  data: <Database className="stroke-brand w-8 h-8" />,
  architecture: <Cpu className="stroke-brand w-8 h-8" />,
  storage: <HardDrive className="stroke-brand w-8 h-8" />,
  software: <Code className="stroke-brand w-8 h-8" />
};

const titleMap = {
  leadership: "Leadership & Strategy",
  cloud: "Cloud",
  data: "Data & Analytics",
  architecture: "Architecture",
  storage: "Data Storage",
  software: "Software Development"
};

export function SkillsSection() {
  const { skills } = resumeData;

  return (
    <section className="relative py-24" id="skills">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A comprehensive overview of my technical expertise, spanning from infrastructure and data processing to software engineering and architectural design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass rounded-2xl border-gradient relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                {iconMap[category]}
              </div>
              <div className="flex items-center gap-4 mb-6">
                 {iconMap[category]}
                 <h3 className="text-2xl font-display font-semibold">{titleMap[category]}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
