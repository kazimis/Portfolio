import React from "react";
import projects, { projectsData } from "./data";
const Projects = () => {
  return (
    <>
      {/* <div className="container-fluid padding">
        <div className="row title text-center">
          <div className="col-12">
            <h2>All projects</h2>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container-fluid padding" style={{ width: "75%" }}>
        <div className="row padding">
          {projectsData.map((project) => {
            return <Project key={project.id} {...project}></Project>;
          })}
        </div>
      </div> */}
      <div id="Projects" className="container-fluid text-center bg-light">
        <div className="custom-container">
          <h1 className="title">Projects</h1>
          <h4>What I have created</h4>
          <div class="row text-center slideanim">
            {projectsData.map((project) => {
              const { id, image, info, name } = project;
              return (
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img src={image} alt="name" width="400" height="300" />
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <p>{info}</p>
                    <a
                      style={{ margin: "1rem" }}
                      href="#"
                      className="btn btn-info"
                    >
                      Source code
                    </a>
                    <a href="#" className="btn btn-info">
                      Link
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
