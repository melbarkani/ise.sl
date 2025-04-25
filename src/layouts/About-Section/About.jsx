import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about__page">
      <div className="about__title">
        <h1>¿ Quiénes somos ?</h1>
      </div>
      <div className="about__countries">
        <div className="spain">
          España
        </div>
        <div className="germany">
          Alemania
        </div>
      </div>
      <p className="about__text">
        Somos una empresa especializada en instalaciones eléctricas y automatización KNX. 
        Nuestro equipo de expertos está comprometido en ofrecer soluciones técnicas modernas, 
        seguras y adaptadas a las necesidades de nuestros clientes.
      </p>
      <div className="about__images">
        <div className="image-1">
          <img src="/public/assets/men.jpg" alt="about1" className="about__image" />
        </div>
        <div className="image-2">
          <img src="/public/assets/women.jpg" alt="about2" className="about__image" />
        </div>
        <div className="image-3">
          <img src="/public/assets/worker.png" alt="about3" className="about__image" />
        </div>
      </div>
    </div>
  );
}

export default About;