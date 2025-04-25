import React from "react";
import "./Hero.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{t("title")}</h1>
        <p className="hero__description">{t("description")}</p>
      </div>
      <img src="/public/assets/hero-img.jpg" alt="Hero" />
    </section>
  );
}

export default Hero;