import React, { useState, useEffect } from 'react';
import './ScrollingBanner.scss';

const infos = [
  "Intervenimos en España 🇪🇸 y Alemania 🇩🇪",
  "Instalaciones eléctricas residenciales, comerciales e industriales",
  "Especialistas en automatización KNX y sistemas Bus",
  "Ventanas eléctricas y ventilación natural inteligente",
  "Mantenimiento eléctrico y reformas técnicas",
  "Soluciones técnicas modernas, seguras y adaptadas",
  "Contáctanos: +34 602 62 97 56 / +49 1520 4893071",
  "Proyectos personalizados, eficientes y fiables",
  "Instalaciones conforme a las normativas europeas 🇪🇺",
  "Pide tu presupuesto sin compromiso"
];

export default function ScrollingBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % infos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="banner-container">
      <button className="pause-btn" onClick={() => setPaused(!paused)} data-text="Continuar">
        <img
          src={paused ? "../../assets/play.png" : "../../assets/pause.png"}
          alt={paused ? "Play" : "Pause"}
          className="pause-icon"
        />
        <span key={paused ? 'continuar' : 'pausar'} className="btn-label fade">
          {paused ? 'Continuar' : 'Pausar'}
        </span>
      </button>

      <hr />

      <div className="banner-text-wrapper">
        <p key={index} className="banner-text">{infos[index]}</p>
      </div>
    </div>
  );
}
