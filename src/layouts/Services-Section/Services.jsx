import React from "react";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className="service__page">
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