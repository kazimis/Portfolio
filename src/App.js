import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Skills from "./Skills";
import FixedBg from "./FixedBg";
import Projects from "./Projects";
import Footer from "./Footer";
import Chat from "./Chat";

// import Carousel from "./Carousel";
//
// import Experience from "./Experience";
//
//
//

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
      <FixedBg />
      <Projects />
      <Footer />
      <Chat />
    </>
  );
}

export default App;
