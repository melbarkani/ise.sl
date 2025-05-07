import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact__section">
      <div className="contact__section__content">
        <h2>{t('contact__title')}</h2>
        <div className="contact__cards">
          <a className="contact-card" href="#faq">
            <img src="/assets/question.png" alt="FAQ Icon" className="help-card__icon" />
            <span>{t('contact__faq')}</span>
            <p>{t('contact__faq__description')}</p>
          </a>
          <a className="contact-card" href="#message">
            <img src="/assets/client-service.png" alt="Client Service Icon" className="help-card__icon" />
            <span>{t('contact__message')}</span>
            <p>{t('contact__message__description')}</p>
          </a>
          <a className="contact-card" href="#call">
            <img src="/assets/phone.png" alt="Quick Assistance Icon" className="help-card__icon" />
            <span>{t('contact__call')}</span>
            <p>{t('contact__call__description')}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
