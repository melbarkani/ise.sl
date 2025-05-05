import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const services = [
    {
      title: "Instalaciones eléctricas",
      description: "Realizamos instalaciones eléctricas residenciales, comerciales e industriales.",
      icon: "/public/assets/electric-plug.png",
      iconHover: "/public/assets/electric-plug_white.png"
    },
    {
      title: "Automatización KNX",
      description: "Especialistas en automatización KNX y sistemas Bus.",
      icon: "/public/assets/automation.png"
    },
    {
      title: "Ventanas eléctricas",
      description: "Instalación de ventanas eléctricas y ventilación natural inteligente.",
      icon: "/public/assets/window.png",
      iconHover: "/public/assets/window_white.png"
    },
    {
      title: "Mantenimiento eléctrico",
      description: "Ofrecemos mantenimiento eléctrico y reformas técnicas.",
      icon: "/public/assets/maintenance.png"
    },
    {
      title: "Soluciones técnicas",
      description: "Proporcionamos soluciones técnicas modernas, seguras y adaptadas.",
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
          <h2>¿ Como podemos ayudarle ?</h2>
        </div>

        <div className="service__cards">
          <ul className="services__container">
            {services.map((service, index) => (
              <li key={index}>
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
