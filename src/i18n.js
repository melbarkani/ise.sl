// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      navbar: {
        quote: 'Solicitar presupuesto',
        services: 'Servicios',
        who: 'Sobre nosotros',
        contact: 'Contacto',
        phone__number: '+34 602 62 97 56', 
      },
      hero__title: 'Soluciones eléctricas inteligentes, en España y Alemania',
      hero__description:
        'En Instalaciones y Servicios El Barkani S.L. combinamos tecnología, experiencia y compromiso para ofrecer instalaciones seguras, automatización y mantenimiento de confianza.',
      services__title: '¿ Cómo podemos ayudarle ?',
      services: {
        installations: {
          title: "Instalaciones eléctricas",
          description: "Realizamos instalaciones eléctricas para viviendas, negocios e industrias."
        },
        automation: {
          title: "Automatización KNX",
          description: "Especialistas en automatización KNX y sistemas Bus."
        },
        windows: {
          title: "Ventanas eléctricas",
          description: "Instalación de ventanas eléctricas y ventilación natural inteligente."
        },
        maintenance: {
          title: "Mantenimiento eléctrico",
          description: "Ofrecemos mantenimiento eléctrico y reformas técnicas."
        },
        solutions: {
          title: "Soluciones técnicas",
          description: "Proporcionamos soluciones técnicas modernas, seguras y adaptadas."
        }
      },
      about__title: 'Sobre nosotros',
      about__spain: 'España',
      about__germany: 'Alemania',
      about__description:
        'Somos una empresa especializada en instalaciones eléctricas y automatización KNX. Nuestro equipo de expertos está comprometido en ofrecer soluciones técnicas modernas, seguras y adaptadas a las necesidades de nuestros clientes.',    
      contact__title: '¿Cómo contactarnos?',
      contact__faq: 'Preguntas frecuentes',
      contact__message: 'Envíanos un mensaje',
      contact__call: 'Asistencia rápida por llamada',
      contact__faq__description: 'Encuentra la respuesta a las preguntas que más nos hacen',
      contact__message__description: 'Contacta con nuestro equipo para ser orientado según tus necesidades',
      contact__call__description: '¿Una situación urgente ? Nuestro servicio de asistencia te responderá rápidamente',
      footer__terms: 'Términos y condiciones',
      footer__privacy: 'Política de privacidad',
      maintenance__title: 'Página en mantenimiento',
      maintenance__description: 'Estamos realizando tareas de mantenimiento. Por favor, vuelve más tarde o contacta con nosotros por teléfono o correo electrónico.',
      continue: 'Continuar',
      pause: 'Pausar',
      infos: [
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
      ]      
    },
  },
  de: {
    translation: {
      welcome: 'Willkommen',
      switch_language: 'Sprache wechseln',
      navbar: {
        quote: 'Ein Angebot anfordern',
        services: 'Dienstleistungen',
        who: 'Über uns',
        contact: 'Kontakt',
        phone__number: '+49 1520 4893071',
      },
      hero__title: 'Intelligente elektrische Lösungen, in Spanien und Deutschland',
      hero__description:
        'Bei Instalaciones y Servicios El Barkani S.L. kombinieren wir Technologie, Erfahrung und Engagement, um sichere Installationen, Automatisierung und zuverlässige Wartung anzubieten.',
      services__title: 'Wie können wir Ihnen helfen?',
      services: {
        installations: {
          title: "Elektroinstallationen",
          description: "Wir führen elektrische Installationen für Wohn-, Geschäfts- und Industriegebäude durch."
        },
        automation: {
          title: "KNX-Automatisierung",
          description: "Spezialisten für KNX-Automatisierung und Bus-Systeme."
        },
        windows: {
          title: "Elektrische Fenster",
          description: "Installation von elektrischen Fenstern und intelligenter natürlicher Belüftung."
        },
        maintenance: {
          title: "Elektrische Wartung",
          description: "Wir bieten elektrische Wartung und technische Renovierungen an."
        },
        solutions: {
          title: "Technische Lösungen",
          description: "Wir bieten moderne, sichere und angepasste technische Lösungen."
        }
      }, 
      about__title: 'Über uns',
      about__spain: 'Spanien',
      about__germany: 'Deutschland',
      about__description:
        'Wir sind ein Unternehmen, das auf Elektroinstallationen und KNX-Automatisierung spezialisiert ist. Unser Expertenteam ist bestrebt, moderne, sichere und angepasste technische Lösungen anzubieten.',     
      contact__title: 'Wie können Sie uns kontaktieren ?',
      contact__faq: 'Häufig gestellte Fragen',
      contact__message: 'Senden Sie uns eine Nachricht',
      contact__call: 'Schnelle Hilfe per Anruf',
      contact__faq__description: 'Finden Sie die Antwort auf die häufigsten Fragen',
      contact__message__description: 'Kontaktieren Sie unser Team, um je nach Bedarf beraten zu werden',
      contact__call__description: 'Haben Sie eine dringende Situation? Unseren Notdienst wird Ihnen schnell antworten',
      footer__terms: 'Allgemeine Geschäftsbedingungen',
      footer__privacy: 'Datenschutz',
      maintenance__title: 'Seite in Wartung',
      maintenance__description: 'Wir führen Wartungsarbeiten durch. Bitte kommen Sie später zurück oder kontaktieren Sie uns telefonisch oder per E-Mail.',
      continue: 'Fortfahren',
      pause: 'Pause',
      infos: [
        "Wir sind tätig in Spanien 🇪🇸 und Deutschland 🇩🇪",
        "Elektroinstallationen für Wohn-, Geschäfts- und Industriegebäude",
        "Spezialisten für KNX-Automatisierung und Bus-Systeme",
        "Elektrische Fenster und intelligente natürliche Belüftung",
        "Elektrische Wartung und technische Renovierungen",
        "Moderne, sichere und angepasste technische Lösungen",
        "Kontaktieren Sie uns: +34 602 62 97 56 / +49 1520 4893071",
        "Individuelle, effiziente und zuverlässige Projekte",
        "Installationen gemäß den europäischen Normen 🇪🇺",
        "Fordern Sie ein unverbindliches Angebot an"
      ]
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
