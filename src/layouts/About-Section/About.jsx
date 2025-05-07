import React from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about__page">
      <div className="about__background"></div>
      <div className="about__title">
        <h2>{t('about__title')}</h2>
      </div>
      <div className="about__countries">
        <div className="spain">
          {t('about__spain')}
        </div>
        <div className="germany">
          {t('about__germany')}
        </div>
      </div>
      <p className="about__text">
        {t('about__description')}
      </p>
      <div className="about__images">
        <div className="image-1">
          <img src="../../assets/workers.jpg" alt="about1" className="about__image" />
        </div>
        <div className="image-2">
          <img src="../../assets/women.jpg" alt="about2" className="about__image" />
        </div>
        <div className="image-3">
          <img src="../../assets/worker.png" alt="about3" className="about__image" />
        </div>
      </div>
    </section>
  );
}

export default About;