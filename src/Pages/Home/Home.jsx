import React from "react";
import "./Home.scss";

import AnimatedLine from "../../components/AnimatedLine/AnimatedLine";

import Hero from "../../layouts/Hero/Hero";
import Services from "../../layouts/Services-Section/Services";
import About from "../../layouts/About-Section/About";
import Contact from "../../layouts/Contact-Section/Contact";

const Home = () => {
  return (
    <div className="home__page" id="home__page">
      <AnimatedLine />
      <main role="main" className="main-content">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default Home;