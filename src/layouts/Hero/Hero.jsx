import React from "react";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

import ScrollingBanner from "../../components/ScrollingBanner/ScrollingBanner";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero__page">
      <div className="hero__content">
        <h1 className="hero__title h1">
          <span>{t("hero__title")}</span>
        </h1>
        <p className="hero__description p-l">
          {t("hero__description")}
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