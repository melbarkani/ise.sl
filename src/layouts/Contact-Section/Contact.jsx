import React from "react";
import "./Contact.scss";
// import { FaQuestionCircle, FaHeadset, FaHardHat } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="help-section">
      <div className="help-section__left">
        <h2>¿Como contactarnos?</h2>
      </div>
      <div className="help-section__right">
        <div className="help-card">
          <img src="/public/assets/question.png" className="help-card__icon" />
          <h3>FAQ</h3>
          <p>Encuentra la respuesta a las preguntas que más nos hacen</p>
        </div>
        <div className="help-card">
        <img src="/public/assets/client-service.png" className="help-card__icon" />
          <h3>Atención al cliente</h3>
          <p>Contacta con nuestro equipo para ser orientado según tus necesidades</p>
        </div>
        <div className="help-card">
        <img src="/public/assets/question.png" className="help-card__icon" />
          <h3>Servicio de asistencia</h3>
          <p>¿Una situación urgente? Nuestro servicio de asistencia te responderá rápidamente</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
