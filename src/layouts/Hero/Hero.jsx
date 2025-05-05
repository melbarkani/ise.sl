import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.scss";
//import i18n from "../../i18n";
//import { useTranslation } from "react-i18next";

import ScrollingBanner from "../../components/ScrollingBanner/ScrollingBanner";

const Hero = () => {
  //const { t } = useTranslation();

  return (
    <section className="hero" id="hero__page">
      <div className="hero__content">
        <h1 className="hero__title h1">
          {/*{t("title")}*/}
          <span>Soluciones eléctricas inteligentes, en España y Alemania</span>
        </h1>
        <p className="hero__description p-l">
          {/*{t("description")}*/}
          En Instalaciones y Servicios El Barkani S.L. combinamis tecnología, experiencia y compromiso para ofrecer instalaciones seguras, automatización y mantenimiento de confianza.
        </p>
        <picture className="hero__media">
          <img src="/public/assets/hero-img.jpg" alt="hero image" />
        </picture>
      </div>

      <ScrollingBanner />
    </section>
  );
}

export default Hero;