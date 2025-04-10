
import React from 'react';
import { useLocale, Locale } from '../context/LocaleContext';

const LanguageSwitch: React.FC = () => {
  const { locale, setLocale, t } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ru' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="text-white hover:text-brand-pink transition-colors px-2 py-1 rounded border border-white/20"
    >
      {t(`language.${locale}`)}
    </button>
  );
};

export default LanguageSwitch;
