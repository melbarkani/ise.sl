import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedLine.scss";

gsap.registerPlugin(ScrollTrigger);

const AnimatedLine = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Initialisation : la ligne commence complètement dessinée
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: 0,  // Ligne déjà dessinée au début
    });

    // Animation au scroll : la ligne se "révèle" en scrollant
    gsap.to(path, {
      strokeDashoffset: length, // Cette valeur va cacher la ligne
      scrollTrigger: {
        trigger: path,
        start: "top top",  // Début de l'animation quand le bas du path touche le bas du viewport
        end: "bottom top",          // Fin de l'animation quand le haut du path touche le haut du viewport
        scrub: true,
        // markers: true, // Activer si tu veux voir les points de déclenchement
      },
      ease: "none", // Animation sans easing pour un tracé régulier
    });
  }, []);

  return (
    <div className="line__container">
      <svg
        viewBox="0 0 600 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="animated__line"
      >
        <defs>
          <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7FDBFF" />
            <stop offset="10%" stopColor="#FDC500" />
            <stop offset="12%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#A5D6A7" />
            <stop offset="50%" stopColor="#3F51B5" />
            <stop offset="75%" stopColor="#A5D6A7" />
            <stop offset="100%" stopColor="#7FDBFF" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d="M600 50 H150 Q50 50 50 150 V1000"
          stroke="url(#lineGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedLine;
