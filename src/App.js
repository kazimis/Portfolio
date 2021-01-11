import React from "react";
import Navbar from "./Navbar";
import HeaderHero from "./HeaderHero";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="slideContainer"> */}
      <HeaderHero />
      <main>
        <Projects />
      </main>
    </>
  );
}

export default App;
