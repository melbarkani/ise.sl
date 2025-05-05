import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedLine.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    gsap.fromTo(
      path,
      { stroke: "#fff" }, // Couleur initiale blanche
      {
        stroke: "#426390", // Couleur finale bleue
        scrollTrigger: {
          trigger: "#home__page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <svg
      className="global-animated-svg"
      viewBox="0 0 2000 6000"
      preserveAspectRatio="none"
      style={{ height: "auto", width: "100%" }}
    >
      <path
        ref={pathRef}
        d="M 220 470 h -150 
          a 20 20 0 0 0 -20 20 
          v 620 
          a 20 20 0 0 0 20 20 
          h 1680 
          a 20 20 0 0 1 20 20 
          v 1580
          a 20 20 0 0 1 -20 20
          h -1680
          a 20 20 0 0 0 -20 20
          v 9999"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
