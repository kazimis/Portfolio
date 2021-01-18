import React from "react";
import Skills from "./Skills";
const Jumbotron = () => {
  return (
    <div className="container-fluid">
      <div className="row jumbotron">
        <div className="container-fluid padding">
          <div className="row title text-center">
            <div className="col-12">
              <h2> Technical Skills</h2>
            </div>
            <hr></hr>
            <div className="col-12">
              <p className="lead">
                I have strong grasp of the following programming languages and
                software development tools and technology.
              </p>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default Jumbotron;
