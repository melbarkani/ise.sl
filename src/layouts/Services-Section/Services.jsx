import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

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
      icon: "../../assets/electric-plug.png",
      iconHover: "../../assets/electric-plug_white.png"
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      icon: "../../assets/automation.png"
    },
    {
      title: t("services.windows.title"),
      description: t("services.windows.description"),
      icon: "../../assets/window.png",
      iconHover: "../../assets/window_white.png"
    },
    {
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      icon: "../../assets/maintenance.png"
    },
    {
      title: t("services.solutions.title"),
      description: t("services.solutions.description"),
      icon: "../../assets/solutions.png"
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
