import React from "react";
import Project from "./Project";
import projects, { projectsData } from "./data";
const Projects = () => {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row title text-center">
          <div className="col-12">
            <h1 className="display-4">All projects</h1>
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
      </div>
    </>
  );
};

export default Projects;
