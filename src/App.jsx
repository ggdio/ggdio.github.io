import { useEffect } from 'react';
import { LanguageProvider } from './hooks/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Layout/Header';
import { Navbar } from './components/Layout/Navbar';
import { FloatingSocials } from './components/ui/FloatingSocials';
import { KnowledgeSection } from './components/KnowledgeHub/KnowledgeSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { TestimonialWall } from './components/Testimonials/TestimonialWall';
import { SkillsSection } from './components/Skills/SkillsSection';
import { GitHubSection } from './components/GitHub/GitHubSection';

function AppContent() {
  const { t } = useLanguage();

  useEffect(() => {
    const handleClick = (e) => {
      const el = e.target.closest('[data-track]');
      if (!el) return;
      window.goatcounter?.count({ path: el.dataset.track, event: true });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen relative bg-app-bg text-app-text-muted font-sans antialiased">
      <Navbar />
      <FloatingSocials />
      <Header />

      <main>
        <ExperienceSection />
        <SkillsSection />
        <GitHubSection />
        <TestimonialWall />
        <KnowledgeSection />
      </main>

      <footer
        className="py-8 px-10 text-center text-[13px] text-app-text-dim border-t border-app-border"
        style={{ background: 'var(--bg-primary)' }}
      >
        <p>© {new Date().getFullYear()} Guilherme Dio. {t.footer}</p>
        <a
          href="https://ggdio.goatcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-[11px] text-app-text-dim opacity-30 hover:opacity-60 transition-opacity"
        >
          analytics
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
