import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Jumbotron from "./Jumbotron";
import Experience from "./Experience";
import FixedBg from "./FixedBg";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Jumbotron />
      <Experience />
      <hr className="my-4" />
      <FixedBg />
      <hr className="my-4" />
      <Projects />
      <hr />
      <Footer />
    </>
  );
}

export default App;
