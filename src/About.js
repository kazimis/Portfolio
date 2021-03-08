import React from "react";
import img from "./assets/img/saraj.jfif";
const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">About</h2>
            <hr className="divider light my-4" />
            <div className="text-center">
              <img src={img} className="img-profile" alt="profile" />
              <p className="text-white">S.Web Developer</p>
            </div>
            <p className="text-white-50 mb-4 text-justify">
              My interest in software development roots in my passion to solve
              real life problems that positively impact every area of society.
              This passion carried me through education at SFU where I learned
              new programming languages, advance algorithms, higher mathematics,
              all with very great impact on my technical skills. The passion to
              learn more remains with me and there are many problems to be
              explored. Recently I broadened my knowledge in web system
              architectures that include cloud computing, AWS, designing
              scalable distributed systems, and performance analysis on such
              systems. I constantly spend time horning my skills by learning new
              topics and working independently on medium scale projects.
            </p>
            <a
              className="btn btn-light btn-xl js-scroll-trigger"
              href="#projects"
            >
              Explore my projects!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
