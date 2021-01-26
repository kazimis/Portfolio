import React from "react";
import img from "./img/saraj.jfif";
const About = () => {
  return (
    <div id="about" className="row about">
      <div className="custom-container">
        <div className="text-center title">
          <h1>About Me</h1>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <img src={img} className="img-fluid" alt="profile" />
          <span>S.Web Developer</span>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 desc">
          <h3>Saraj Kazimi</h3>
          <p>
            Becoming a computer scientist was my dream. My interset to become a
            computer scientist and software development roots in my passion to
            solve real life problems. Throughout my past four years at SFU, I
            worked on group projects as well as personal projects. In my
            projects, my focus was to apply efficient algorithms and appropriate
            data structures to solve problems. I mostly used C, C++, Python, and
            Golang programming languages. I have also built Web Apps using Node,
            Angular, React and ASP.NET. My personal projects provides a good
            grasp of knowledge in C, C++, Python, Golang, JavaScript and Matlab.
          </p>
          <p style={{ fontWeight: "bold" }}>Languages/Tools:</p>
          <p>
            Python, C, C++, Golang, JavaScript, C#, R, SQL, and Matlab.
            <br />
            NodeJs, AnuglarJS, ASP.NET, React, Pytorch, pandas, and numpy.
            <br />
            Mac, Linux, and Windows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
