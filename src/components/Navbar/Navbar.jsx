import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import i18n from "../../i18n";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <button
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="navbar__logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        <button className="navbar__cta">
          <img src="/public/assets/quote-icon.png" alt="" />
          <span>Solicitar presupuesto</span>
        </button>

        <nav className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Sobre nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li>
              <button className="phone__number" href="tel:+34602629756">
                <img src="/public/assets/phone-icon.png" alt="" />
                <span>+34 602 62 97 56</span>
              </button>
            </li>
            <li>
              <button className="lang__switcher" onClick={toggleLanguage}>
                <img src="/public/assets/lang-icon.png" alt="" />
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
