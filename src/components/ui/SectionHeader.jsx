import { motion } from 'framer-motion';

export function SectionHeader({ eyebrow, title, highlight, subtitle, align = 'left' }) {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${isCenter ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className="text-[11px] font-semibold text-brand-light uppercase tracking-[0.2em] mb-2.5">
          {eyebrow}
        </div>
      )}
      <h2
        className="font-display font-bold text-app-text leading-tight"
        style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em' }}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base text-app-text-muted leading-[1.7] max-w-[560px] ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
