import React from "react";
import './Services.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className="service__page">
      <div className="services__title">
        <h1>¿ Como <br></br> podemos ayudarle ?</h1>
      </div>

      <div className="services__container">
        <ServiceCard
          title="Instalaciones eléctricas"
          description="Realizamos instalaciones eléctricas residenciales, comerciales e industriales."
          icon={<img
            src="/public/assets/electric-plug.png"
            alt="Electric plug"
          />}
        />
        <ServiceCard
          title="Automatización KNX"
          description="Especialistas en automatización KNX y sistemas Bus."
          icon={<img
            src="/public/assets/automation.png"
            alt="Automation"
          />}
        />
        <ServiceCard
          title="Ventanas eléctricas"
          description="Instalación de ventanas eléctricas y ventilación natural inteligente."
          icon={<img
            src="/public/assets/window.png"
            alt="Window"
          />}
        />
        <ServiceCard
          title="Mantenimiento eléctrico"
          description="Ofrecemos mantenimiento eléctrico y reformas técnicas."
          icon={<img
            src="/public/assets/maintenance.png"
            alt="Maintenance"
          />}
        />
        <ServiceCard
          title="Soluciones técnicas"
          description="Proporcionamos soluciones técnicas modernas, seguras y adaptadas."
          icon={<img
            src="/public/assets/solutions.png"
            alt="Solutions"
          />}
        />
      </div>
    </div>
  );
}

export default Services;