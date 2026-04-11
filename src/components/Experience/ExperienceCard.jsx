import { motion } from 'framer-motion';

export function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass p-8 rounded-2xl relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-display font-semibold text-white mb-1">
              {experience.role}
            </h3>
            <p className="text-lg text-brand-light font-medium">
              {experience.company}
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-left md:text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-2">
              {experience.period}
            </span>
            <p className="text-sm text-slate-500">{experience.location}</p>
          </div>
        </div>
        
        <p className="text-slate-400 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
