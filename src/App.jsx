import { LanguageProvider } from './hooks/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Layout/Header';
import { Navbar } from './components/Layout/Navbar';
import { FloatingSocials } from './components/ui/FloatingSocials';
import { LanguageToggle } from './components/ui/LanguageToggle';
import { KnowledgeSection } from './components/KnowledgeHub/KnowledgeSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { TestimonialWall } from './components/Testimonials/TestimonialWall';
import { SkillsSection } from './components/Skills/SkillsSection';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden bg-app-bg text-app-text-muted font-sans selection:bg-brand/30 antialiased">
      <Navbar />
      <LanguageToggle />
      <FloatingSocials />
      <Header />

      <main className="container max-w-7xl mx-auto px-6 relative z-10 w-full space-y-12">
        <ExperienceSection />
        <SkillsSection />
        <TestimonialWall />
        <KnowledgeSection />
      </main>

      <footer className="py-8 text-center text-app-text-muted/50 text-sm mt-24 border-t border-app-border">
        <p>© {new Date().getFullYear()} Guilherme Dio. {t.footer}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
