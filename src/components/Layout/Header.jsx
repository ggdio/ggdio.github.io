import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { useLanguage } from '../../hooks/useLanguage';
import { ParticleBackground } from '../ui/ParticleBackground';

export function Header() {
  const { language, t } = useLanguage();
  const { about } = resumeData[language];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-14 overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(10,102,194,0.16) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '10%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <ParticleBackground />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 w-full"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="pill pill-blue">{t.header.badge}</span>
            <span className="pill pill-green">
              <span
                className="inline-block w-[7px] h-[7px] rounded-full bg-accent-green mr-1.5 align-middle"
                style={{ boxShadow: '0 0 5px var(--color-accent-green)' }}
              />
              {t.header.available}
            </span>
          </div>

          <h1
            className="font-display font-black text-app-text mb-4"
            style={{
              fontSize: 'clamp(60px, 7vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
            }}
          >
            Guilherme<br />Dio
          </h1>

          <p
            className="font-display text-app-text-muted mb-6"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: 400, lineHeight: 1.4 }}
          >
            <strong className="text-brand-light font-semibold">Data &amp; Analytics</strong>
            {' · Architecture · Software Engineering · Leadership'}
          </p>

          <div
            className="mb-8 max-w-[540px] pl-[18px]"
            style={{ borderLeft: '2px solid rgba(10,102,194,0.5)' }}
          >
            <p className="text-[15px] italic font-light text-app-text-muted leading-[1.75]">
              {about}
            </p>
          </div>

          <div className="flex gap-8 mb-9">
            <Stat val="18+" label={t.header.stat1} color="var(--color-brand)" />
            <Stat val="100+" label={t.header.stat2} color="var(--color-accent-violet)" />
            <Stat val="50+" label={t.header.stat3} color="var(--color-accent-green)" />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download="Guilherme_Dio_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-[11px] rounded-lg text-sm font-semibold bg-brand text-white hover:bg-[#0d78d8] hover:-translate-y-px transition-all"
              style={{ boxShadow: '0 0 0 transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(10,102,194,0.45)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
            >
              <Download size={16} strokeWidth={2.5} />
              {t.header.downloadResume}
            </a>
            <a
              href="https://linkedin.com/in/guilhermedio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-[11px] rounded-lg text-sm font-semibold border border-app-border-strong text-app-text-muted hover:text-app-text hover:bg-app-glass2 hover:-translate-y-px transition-all"
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative w-[260px] md:w-[340px] shrink-0"
        >
          <div
            className="w-full relative overflow-hidden rounded-2xl"
            style={{
              aspectRatio: '3 / 4',
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(10,102,194,0.2)',
              boxShadow: '0 0 40px rgba(10,102,194,0.12)',
            }}
          >
            <img
              src="/images/portrait.png"
              alt="Guilherme Dio"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center top', filter: 'contrast(1.05) brightness(0.95)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}
            />
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-3.5 flex items-center gap-1.5 px-4 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap"
            style={{
              background: 'rgba(52,211,153,0.12)',
              border: '1px solid rgba(52,211,153,0.35)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-accent-green animate-pulse"
              style={{ boxShadow: '0 0 6px var(--color-accent-green)' }}
            />
            <span className="text-xs text-accent-green font-medium">{t.header.status}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ val, label, color }) {
  return (
    <div>
      <div
        className="font-display font-extrabold leading-none"
        style={{ fontSize: 34, color }}
      >
        {val}
      </div>
      <div className="text-[11px] text-app-text-dim mt-1 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
