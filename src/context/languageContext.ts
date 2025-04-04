import { createContext } from 'react';

export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
