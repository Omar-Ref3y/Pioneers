import React from 'react';
import { useLanguageHooks } from '../hooks/useLanguageHooks';
import { LanguageContext } from './languageContext';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguageHooks();

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
