import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import electric__plug__icon from "../../assets/electric-plug.png";
import electric__plug__icon__white from "../../assets/electric-plug_white.png";
import automation__icon from "../../assets/automation.png";
import window__icon from "../../assets/window.png";
import window__icon__white from "../../assets/window_white.png";
import maintenance__icon from "../../assets/maintenance.png";
import maintenance__icon__white from "../../assets/maintenance_white.png";
import solutions__icon from "../../assets/solutions.png";
import solutions__icon__white from "../../assets/solutions_white.png";

const Services = () => {
  const titleRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const services = [
    {
      title: t("services.installations.title"),
      description: t("services.installations.description"),
      icon: electric__plug__icon,
      iconHover: electric__plug__icon__white
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      icon: automation__icon,
      iconHover: automation__icon
    },
    {
      title: t("services.windows.title"),
      description: t("services.windows.description"),
      icon: window__icon,
      iconHover: window__icon__white
    },
    {
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      icon: maintenance__icon,
      iconHover: maintenance__icon__white
    },
    {
      title: t("services.solutions.title"),
      description: t("services.solutions.description"),
      icon: solutions__icon,
      iconHover: solutions__icon__white
    }
  ];  

  return (
    <section id="services" className="service__page">
      <div className="service__content">
        <div className="services__title fadeup" ref={titleRef}>
          <h2>{t("services__title")}</h2>
        </div>

        <div className="service__cards">
          <ul className="services__container">
            {services.map((service, index) => (
              <li className="service__item" key={index}>
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
