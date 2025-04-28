import React from "react";
import "./Home.scss";

import Hero from "../../layouts/Hero/Hero";
import AnimatedLine from "../../components/AnimatedLine/AnimatedLine";
import ScrollingBanner from "../../components/ScrollingBanner/ScrollingBanner";
import Services from "../../layouts/Services-Section/Services";
import About from "../../layouts/About-Section/About";
import Contact from "../../layouts/Contact-Section/Contact";

const Home = () => {
  return (
    <div className="home__page">
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