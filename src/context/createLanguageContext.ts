import { createContext } from 'react';

export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const createLanguageContext = () => {
  return createContext<LanguageContextType | undefined>(undefined);
};
