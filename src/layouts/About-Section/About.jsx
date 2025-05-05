import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about__page">
      <div className="about__background"></div>
      {/*
      <svg viewBox="0 0 400 1000" className="animated__line__about">
        <path
          d="M 1016 0 L 1016 720 Q 1016 820 916 820 L -700 820 Q -800 820 -800 920 L -800 1000"
          stroke="#1423DC"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      */}
      <div className="about__title">
        <h2>Sobre Nosotros</h2>
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
          <img src="/public/assets/workers.jpg" alt="about1" className="about__image" />
        </div>
        <div className="image-2">
          <img src="/public/assets/women.jpg" alt="about2" className="about__image" />
        </div>
        <div className="image-3">
          <img src="/public/assets/worker.png" alt="about3" className="about__image" />
        </div>
      </div>
    </section>
  );
}

export default About;