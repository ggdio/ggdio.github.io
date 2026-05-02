import { useState } from 'react';
import { LanguageContext } from './useLanguage';
import { en } from '../i18n/en';
import { pt } from '../i18n/pt';

const translations = { en, pt };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const lang = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
    return lang.startsWith('pt') ? 'pt' : 'en';
  });
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
