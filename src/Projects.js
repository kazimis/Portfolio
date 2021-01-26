import React from "react";
import { projectsData } from "./data";
const Projects = () => {
  return (
    <div id="Projects" className="container-fluid text-center">
      <div className="custom-container">
        <h1 className="title">Projects</h1>
        <h4>What I have created</h4>
        <div className="row text-center slideanim">
          {projectsData.map((project) => {
            const { id, image, info, name, link, github } = project;
            return (
              <div key={id} className="col-sm-4">
                <div className="thumbnail">
                  <img src={image} alt="name" width="400" height="300" />
                  <p>
                    <strong>{name}</strong>
                  </p>
                  <p>{info}</p>
                  <a
                    style={{ margin: "1rem" }}
                    href={github}
                    className="btn btn-info"
                  >
                    Source code
                  </a>
                  <a href={link} className="btn btn-info">
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
