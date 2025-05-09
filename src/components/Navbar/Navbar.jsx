import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Navbar.scss";
import i18n from "../../i18n";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo_amarillo.png";
import quote__icon from "../../assets/quote.png";
import phone__icon from "../../assets/phone-icon.png";
import lang__icon from "../../assets/lang-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const languages = ["es", "de"];
    const currentIndex = languages.indexOf(i18n.language);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(nextLang);
  };

  const getNextLangLabel = () => {
    const labels = { es: "DE", de: "ES" };
    return labels[i18n.language] || "ES";
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">

        {/* Bouton de menu burger, ouvre/ferme le menu */}
        <button
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        {/* Bouton d'appel pour rediriger vers la page de devis */}
        <button 
          className="navbar__cta" 
          onClick={() => navigate('/create-quote')}
        >
          <img src={quote__icon} alt="" />
          <span>{t('navbar.quote')}</span>
        </button>

        {/* Menu */}
        <nav className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#services">{t('navbar.services')}</a></li>
            <li><a href="#about">{t('navbar.who')}</a></li>
            <li><a href="#contact">{t('navbar.contact')}</a></li>
            <li>
              <button className="phone__number" href="tel:+34602629756">
                <img src={phone__icon} alt="" />
                <span>{t('navbar.phone__number')}</span>
              </button>
            </li>
            <li>
              <button className="lang__switcher" onClick={toggleLanguage}>
                <img src={lang__icon} alt="" />
                <span>{getNextLangLabel()}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
