import React from "react";
import "./Contact.scss";
// import { FaQuestionCircle, FaHeadset, FaHardHat } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact__section">
      <div className="contact__section__content">
        <h2>¿Cómo contactarnos?</h2>
        <div className="contact__cards">
          <a className="contact-card" href="#faq">
            <img src="/assets/question.png" alt="FAQ Icon" className="help-card__icon" />
            <span>Preguntas frecuentes</span>
            <p>Encuentra la respuesta a las preguntas que más nos hacen</p>
          </a>
          <a className="contact-card" href="#message">
            <img src="/assets/client-service.png" alt="Client Service Icon" className="help-card__icon" />
            <span>Envíanos un mensaje</span>
            <p>Contacta con nuestro equipo para ser orientado según tus necesidades</p>
          </a>
          <a className="contact-card" href="#call">
            <img src="/assets/question.png" alt="Quick Assistance Icon" className="help-card__icon" />
            <span>Asistencia rápida por llamada</span>
            <p>¿Una situación urgente? Nuestro servicio de asistencia te responderá rápidamente</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
