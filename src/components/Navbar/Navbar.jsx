import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFile, faLanguage } from '@fortawesome/free-solid-svg-icons';

import i18n from "../../i18n";

import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const languages = ["es", "de"];
    const nextLang = languages[(languages.indexOf(i18n.language) + 1) % languages.length];
    i18n.changeLanguage(nextLang);
  };

  const getNextLangLabel = () => {
    return { es: "DE", de: "ES" }[i18n.language] || "ES";
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        <button
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t('navbar.menu')}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="navbar__logo">
          <a href="/">
            <img className="logo" src="/logo_amarillo.png" alt="Logo de Instalaciones El Barkani S.L." />
          </a>
        </div>

        <button
          className="navbar__cta button"
          onClick={() => {
            navigate('/create-quote');
            closeMenu();
          }}
          aria-label="Solicitar presupuesto"
          title={t('navbar.quote')}
        >
          <FontAwesomeIcon icon={faFile} />
          <span>{t('navbar.quote')}</span>
        </button>

        <nav className={`navbar__menu ${isMenuOpen ? "open" : ""}`} aria-label="Menú principal">
          <ul>
            <li><a href="#services" onClick={closeMenu}>{t('navbar.services')}</a></li>
            <li><a href="#about" onClick={closeMenu}>{t('navbar.who')}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{t('navbar.contact')}</a></li>
            <li><a className="phone__number" href="tel:+34602629756">{t('navbar.phone__number')}</a></li>
            <li>
              <button
                className="lang__switcher button"
                onClick={toggleLanguage}
                aria-label="Cambiar idioma"
              >
                <FontAwesomeIcon icon={faLanguage} />
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