// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      welcome: 'Bienvenido',
      switch_language: 'Cambiar idioma',
      navbar: {
        who: '¿Quiénes somos?',
        services: 'Servicios',
        contact: 'Contacto',
        quote: 'Solicitar presupuesto',
      },
      title: 'Soluciones eléctricas inteligentes, en España y Alemania',
      description:
        'En Instalaciones y Servicios El Barkani S.L. combinamis tecnología, experiencia y compromiso para ofrecer instalaciones seguras, automatización y mantenimiento de confianza.',
    },
  },
  de: {
    translation: {
      welcome: 'Willkommen',
      switch_language: 'Sprache wechseln',
      navbar: {
        who: 'Wer sind wir ?',
        services: 'Dienstleistungen',
        contact: 'Kontakt',
        quote: 'Ein Angebot anfordern',
      },
      title: 'Intelligente elektrische Lösungen, in Spanien und Deutschland',
      description:
        'Bei Instalaciones y Servicios El Barkani S.L. kombinieren wir Technologie, Erfahrung und Engagement, um sichere Installationen, Automatisierung und zuverlässige Wartung anzubieten.',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
