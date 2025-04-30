import React from "react";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {  

  return (
    <div className="service__page">
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
        <div className="services__title fadeup">
          <h2>¿ Como podemos ayudarle ?</h2>
        </div>

        <div className="service__cards">
          <ul className="services__container">
            <li>
              <ServiceCard
                title="Instalaciones eléctricas"
                description="Realizamos instalaciones eléctricas residenciales, comerciales e industriales."
                icon="/public/assets/electric-plug.png"
                iconHover="/public/assets/electric-plug_white.png"
              />
            </li>
            <li>
              <ServiceCard
                title="Automatización KNX"
                description="Especialistas en automatización KNX y sistemas Bus."
                icon="/public/assets/automation.png"
              />
            </li>
            <li>
              <ServiceCard
                title="Ventanas eléctricas"
                description="Instalación de ventanas eléctricas y ventilación natural inteligente."
                icon="/public/assets/window.png"
                iconHover="/public/assets/window_white.png"
              />
            </li>
            <li>
              <ServiceCard
                title="Mantenimiento eléctrico"
                description="Ofrecemos mantenimiento eléctrico y reformas técnicas."
                icon="/public/assets/maintenance.png"
              />
            </li>
            <li>
              <ServiceCard
                title="Soluciones técnicas"
                description="Proporcionamos soluciones técnicas modernas, seguras y adaptadas."
                icon="/public/assets/solutions.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;