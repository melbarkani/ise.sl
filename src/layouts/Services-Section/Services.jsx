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
                icon={<img
                  src="/public/assets/electric-plug.png"
                  alt="Electric plug"
                />}
              />
            </li>
            <li>
              <ServiceCard
                title="Automatización KNX"
                description="Especialistas en automatización KNX y sistemas Bus."
                icon={<img
                  src="/public/assets/automation.png"
                  alt="Automation"
                />}
              />
            </li>
            <li>
              <ServiceCard
                title="Ventanas eléctricas"
                description="Instalación de ventanas eléctricas y ventilación natural inteligente."
                icon={<img
                  src="/public/assets/window.png"
                  alt="Window"
                />}
              />
            </li>
            <li>
              <ServiceCard
                title="Mantenimiento eléctrico"
                description="Ofrecemos mantenimiento eléctrico y reformas técnicas."
                icon={<img
                  src="/public/assets/maintenance.png"
                  alt="Maintenance"
                />}
              />
            </li>
            <li>
              <ServiceCard
                title="Soluciones técnicas"
                description="Proporcionamos soluciones técnicas modernas, seguras y adaptadas."
                icon={<img
                  src="/public/assets/solutions.png"
                  alt="Solutions"
                />}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;