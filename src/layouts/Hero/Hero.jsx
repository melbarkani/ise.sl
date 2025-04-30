import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.scss";
//import i18n from "../../i18n";
//import { useTranslation } from "react-i18next";

import ScrollingBanner from "../../components/ScrollingBanner/ScrollingBanner";

const Hero = () => {

  /*  
  //const { t } = useTranslation();
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();
  
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: 0,
    });
  
    gsap.to(path, {
      strokeDashoffset: 0,
      //duration: 1, // 1 seconde
      //ease: "power1.out",
      ease: "none",
      scrollTrigger: {
        //trigger: "#home-page",
        start: "10% 20%",
        //toggleActions: "play none none none",
        end: "+=200",
        scrub: true,
      },
    });
  
    ScrollTrigger.refresh();
  }, []);

  */

  return (
    <section className="hero" id="hero__page">
      <div className="hero__content">
        <h1 className="hero__title h1">
          {/*{t("title")}*/}
          <span>Soluciones eléctricas inteligentes, en España y Alemania</span>
        </h1>
        <p className="hero__description p-1">
          {/*{t("description")}*/}
          En Instalaciones y Servicios El Barkani S.L. combinamis tecnología, experiencia y compromiso para ofrecer instalaciones seguras, automatización y mantenimiento de confianza.
        </p>
        {/*
        <svg viewBox="0 0 400 1000" className="animated-line-svg">
          <path
            ref={pathRef}
            d="M 150 520 h -200 a 20 20 0 0 0 -20 20 v 999"
            className="animated-line-path"
          />
        </svg>
        */}
        <picture className="hero__media">
          <img src="/public/assets/hero-img.jpg" alt="hero image" />
        </picture>
        {/*<img src="/public/assets/hero-img.jpg" alt="Hero" />*/}
      </div>

      <ScrollingBanner />
    </section>
  );
}

export default Hero;