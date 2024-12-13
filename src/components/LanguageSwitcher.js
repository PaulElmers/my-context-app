import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div>
      <h1>{language === 'uk' ? 'Привіт!' : 'Hello!'}</h1>
      <button onClick={switchLanguage}>
        {language === 'uk' ? 'Switch to English' : 'Переключити на українську'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
