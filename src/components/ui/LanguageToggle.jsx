import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center p-[3px] rounded-full border border-app-border bg-app-glass">
      {['en', 'pt'].map(lng => (
        <button
          key={lng}
          onClick={() => setLanguage(lng)}
          className={`px-3 py-[3px] rounded-full text-[11px] font-semibold tracking-wider transition-all ${
            language === lng
              ? 'bg-brand text-white shadow'
              : 'text-app-text-dim hover:text-app-text'
          }`}
          aria-label={lng === 'en' ? 'Switch to English' : 'Mudar para Português'}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
