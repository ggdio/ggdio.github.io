import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center p-1 bg-app-glass rounded-full border border-app-border shadow-2xl backdrop-blur-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
          language === 'en'
            ? 'bg-brand text-app-text shadow-lg'
            : 'text-app-text-muted hover:text-app-text'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
          language === 'pt'
            ? 'bg-brand text-app-text shadow-lg'
            : 'text-app-text-muted hover:text-app-text'
        }`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
