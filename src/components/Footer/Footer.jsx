import React from "react";
import './Footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer__wrapper">
                <div className="top__footer">
                    <div className="logo">
                        <img src="/public/assets/logo.png" alt="logo" />
                    </div>
                    <div className="terms">
                        <a href="#terms">Términos y condiciones</a>
                        <a href="#privacy">Política de privacidad</a>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/elbarkani.es" target="_blank" rel="noopener noreferrer"><img src="/public/assets/facebook.png" alt="facebook" /></a>
                        <a href="https://www.instagram.com/elbarkani.es/" target="_blank" rel="noopener noreferrer"><img src="/public/assets/instagram.png" alt="instagram" /></a>
                        <a href="https://www.linkedin.com/company/elbarkani/" target="_blank" rel="noopener noreferrer"><img src="/public/assets/linkedin.png" alt="linkedin" /></a>
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