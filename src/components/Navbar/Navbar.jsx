import React from "react";
import { useEffect, useState } from "react"

import './Navbar.scss';
import i18n from "../../i18n";
//import { useTranslation } from "react-i18next";

const Navbar = () => {
  //const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="header__container">
        
        <div className="header__logo">
          <img className={`${scrolled ? 'scrolled' : ''}`} src="/public/assets/logo.png" alt="Logo" />
        </div>

        {/* AJOUT ici le bouton juste après le logo */}
        <button className="create__propal__btn">
          <img className="quote-icon" src="/assets/quote.png" alt="Quote" />
          <span>Solicitar presupuesto</span>
        </button>

        {/* Puis les liens à droite */}
        <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="burger__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
          <nav className="menu-nav">
            <ul className="menu-nav__list">
              <li>
                <button className="phone__number">
                  <span>+34 602 62 97 56</span>
                </button>
              </li>
              <li className="menu-nav__item push-right">
                <a href="">Servicios</a>
              </li>
              <li className="menu-nav__item">
                <a href="">Sobre nosotros</a>
              </li>
              <li className="menu-nav__item">
                <a href="">Contact</a>
              </li>
              <li className="menu-nav__item">
                <button className="lang__switcher" onClick={toggleLanguage}>
                  {getNextLangLabel()}
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
