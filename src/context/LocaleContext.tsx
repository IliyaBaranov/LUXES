
import React, { createContext, useContext, useState, useEffect } from 'react';

// Supported languages
export type Locale = 'en' | 'ru';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get initial locale from localStorage or default to 'en'
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem('locale');
    return (savedLocale === 'en' || savedLocale === 'ru') ? savedLocale : 'en';
  });

  // Update localStorage when locale changes
  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // Translation function
  const t = (key: string): string => {
    const translations = locale === 'en' ? enTranslations : ruTranslations;
    return translations[key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Hook for using the locale context
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

// Import translations
import { enTranslations } from '../locales/en';
import { ruTranslations } from '../locales/ru';
