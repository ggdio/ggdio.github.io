import { Header } from './components/Layout/Header';
import { Navbar } from './components/Layout/Navbar';
import { FloatingSocials } from './components/ui/FloatingSocials';
import { KnowledgeSection } from './components/KnowledgeHub/KnowledgeSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { TestimonialWall } from './components/Testimonials/TestimonialWall';
import { SkillsSection } from './components/Skills/SkillsSection';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-bg-dark text-slate-300 font-sans selection:bg-brand/30 antialiased">
      <Navbar />
      <FloatingSocials />
      <Header />
      
      <main className="container max-w-7xl mx-auto px-6 relative z-10 w-full space-y-12">
        <ExperienceSection />
        <SkillsSection />
        <TestimonialWall />
        <KnowledgeSection />
      </main>
      
      <footer className="py-8 text-center text-slate-500 text-sm mt-24 border-t border-white/10">
        <p>© {new Date().getFullYear()} Guilherme Dio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
