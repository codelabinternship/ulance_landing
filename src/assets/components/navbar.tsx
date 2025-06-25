import { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18next.language || 'uz'); 

  const changeLanguage = (lang:string) => {
    i18next.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" />
        <div className="text-2xl font-bold text-white">UZLANCE</div>
      </div>
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
       
        <li><a href="#team">{t('Our team')}</a></li>
        <li><a href="#team">{t('About us')}</a></li>
        <li><a href="#services">{t('Services')}</a></li>
        <li><a href="#projects">{t('Projects')}</a></li>
      </ul>
      <div className="flex gap-4">
        <button className="text-blue-400">+998 99 999 99 99</button>
        <button
          className={`border rounded-lg px-2.5 py-1 ${currentLang === 'ru' ? 'text-blue-400' : 'text-[#475569]'}`}
          onClick={() => changeLanguage('ru')}
        >
          RU
        </button>
        <button
          className={`border rounded-lg px-2.5 py-1 ${currentLang === 'uz' ? 'text-blue-400' : 'text-[#475569]'}`}
          onClick={() => changeLanguage('uz')}
        >
          UZ
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
