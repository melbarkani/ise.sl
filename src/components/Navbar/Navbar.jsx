import React from "react";
import { useEffect, useState } from "react"

import './Navbar.scss';
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleLanguage = () => {
    const languages = ['es', 'de'];
    const currentLang = i18n.language;
    const currentIndex = languages.indexOf(currentLang);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(nextLang);
  };

  const getNextLangLabel = () => {
    const languages = ['es', 'de'];
    const labels = { es: 'ES', de: 'DE'};
    const currentIndex = languages.indexOf(i18n.language);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    return labels[nextLang];
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__left">
        <div className="logo">
          <img className={`${scrolled ? 'scrolled' : ''}`} src="/public/assets/logo.png" alt="Logo" />
        </div>
        <div className="navbar__propal__btn">
          <button className="create__propal__btn">
            <img className="quote-icon" src="/assets/quote.png" alt="Quote" />
            <span>{t('navbar.quote')}</span>
          </button>
        </div>
      </div>
      <nav className="navbar__right">
        <ul className="navbar__links">
          <li>
            <a href="">{t('navbar.services')}</a>
            <a href="">{t('navbar.who')}</a>
            <a href="">{t('navbar.contact')}</a>
          </li>
          <li>
            <button className="lang__switcher" onClick={toggleLanguage}>
              {getNextLangLabel()}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
