import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { socialLinks } from '../ui/FloatingSocials';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Endorsements', href: '#testimonials' },
    { name: 'Insights', href: '#knowledge-hub' },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full glass text-white hover:bg-white/10 transition-colors shadow-2xl"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Sidebar */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 glass border-r border-white/10 z-50 flex flex-col pt-20 px-8"
              style={{ backgroundColor: 'var(--color-bg-dark)' }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 left-6 p-3 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 mt-8">
                {links.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-display font-medium text-slate-300 hover:text-white transition-colors tracking-wide hover:translate-x-2 transform duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Socials (bottom of Sidebar) */}
              <div className="mt-auto pb-8 md:hidden flex justify-start gap-4">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-[#0A66C2]/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
