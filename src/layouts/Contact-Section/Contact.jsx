import React from "react";
import "./Contact.scss";
// import { FaQuestionCircle, FaHeadset, FaHardHat } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="contact__section__content">
        <h2>¿Como contactarnos?</h2>
        <div className="contact__cards">
          <a className="contact-card">
            <img src="/public/assets/question.png" className="help-card__icon" />
            <span>FAQ</span>
            <p>Encuentra la respuesta a las preguntas que más nos hacen</p>
          </a>
          <a className="contact-card">
            <img src="/public/assets/client-service.png" className="help-card__icon" />
            <span>Atención al cliente</span>
            <p>Contacta con nuestro equipo para ser orientado según tus necesidades</p>
          </a>
          <a className="contact-card">
            <img src="/public/assets/question.png" className="help-card__icon" />
            <span>Asistencia</span>
            <p>¿Una situación urgente? Nuestro servicio de asistencia te responderá rápidamente</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
