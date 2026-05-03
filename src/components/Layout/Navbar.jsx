import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '../../hooks/useLanguage';

const SECTION_IDS = ['hero', 'experience', 'skills', 'github', 'testimonials', 'knowledge-hub'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const { t } = useLanguage();

  const links = [
    { name: t.nav.experience, href: '#experience', id: 'experience',    track: 'nav-experience'    },
    { name: t.nav.skills,     href: '#skills',     id: 'skills',        track: 'nav-skills'        },
    { name: t.nav.github,     href: '#github',     id: 'github',        track: 'nav-github'        },
    { name: t.nav.endorsements, href: '#testimonials', id: 'testimonials', track: 'nav-endorsements' },
    { name: t.nav.insights,   href: '#knowledge-hub', id: 'knowledge-hub', track: 'nav-insights'   },
  ];

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center px-4 md:px-8 border-b border-app-border backdrop-blur-xl"
        style={{ background: 'color-mix(in oklab, var(--bg-primary) 70%, transparent)' }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden w-9 h-9 mr-3 rounded-lg border border-app-border bg-app-glass2 text-app-text hover:bg-brand/20 hover:text-brand-light transition flex items-center justify-center shrink-0"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>

        <a href="#hero" className="font-display font-extrabold text-xl tracking-tight text-app-text mr-10">
          GD<span className="text-brand">.</span>
        </a>

        <nav className="hidden lg:flex gap-1 flex-1">
          {links.map(link => (
            <a
              key={link.id}
              href={link.href}
              data-track={link.track}
              className={`px-3.5 py-1.5 rounded-md text-[13px] font-normal transition-all ${
                active === link.id
                  ? 'text-brand-light bg-app-glass2'
                  : 'text-app-text-dim hover:text-app-text hover:bg-app-glass2'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex-1 lg:flex-none" />

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
          </div>
          <LanguageToggle />
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-72 h-full p-7 flex flex-col gap-2 border-r border-app-border-strong"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xl font-extrabold text-app-text">
                  GD<span className="text-brand">.</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg border border-app-border-strong bg-app-glass2 text-app-text hover:text-brand-light flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              {links.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  data-track={link.track}
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-3 rounded-lg font-display text-lg font-semibold text-app-text-muted hover:text-app-text hover:bg-app-glass2 transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-auto pt-6 border-t border-app-border-strong flex items-center justify-between">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
