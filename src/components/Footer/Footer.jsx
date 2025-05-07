import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.scss'

import logo from "../../assets/logo_amarillo.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer__wrapper">
                <div className="top__footer">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="terms">
                        <a href="#terms">{t('footer__terms')}</a>
                        <a href="#privacy">{t('footer__privacy')}</a>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/elbarkani.es" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                        <a href="https://www.instagram.com/elbarkani.es/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                        <a href="https://www.linkedin.com/company/elbarkani/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
                    </div>
                </div>
                <div className="bottom__footer">
                    <a href="https://melbarkani.github.io/elbarkani/" target="_blank">Designed & Built by Mohammed El Barkani</a>
                    <p>© {currentYear} Instalaciones y Servicios El Barkani S.L.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;