import React from 'react';
import { useLanguageHooks } from '../hooks/useLanguageHooks';

export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = React.createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguageHooks();

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
