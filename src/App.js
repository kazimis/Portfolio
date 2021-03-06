import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "Script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Skills />
      <Projects />
      {/* <SkillSlider /> */}
      <Footer />
    </>
  );
}

export default App;
