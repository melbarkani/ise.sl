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
      icon: "/public/assets/electric-plug.png",
      iconHover: "/public/assets/electric-plug_white.png"
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      icon: "/public/assets/automation.png"
    },
    {
      title: t("services.windows.title"),
      description: t("services.windows.description"),
      icon: "/public/assets/window.png",
      iconHover: "/public/assets/window_white.png"
    },
    {
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      icon: "/public/assets/maintenance.png"
    },
    {
      title: t("services.solutions.title"),
      description: t("services.solutions.description"),
      icon: "/public/assets/solutions.png"
    }
  ];  

  return (
    <section id="services" className="service__page">
      {/* 
        <svg viewBox="0 0 400 1000" className="animated__line_services">
          <path
            d="M -805 0 L -805 80 Q -805 100 -785 100 L 1000 100 Q 1020 100 1020 120 L 1020 999"
            stroke="#1423DC"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      */}
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
