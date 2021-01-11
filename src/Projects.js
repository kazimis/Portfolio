import React from "react";
import Project from "./Project";
import projects, { projectsData } from "./data";
const Projects = () => {
  return (
    <div>
      <h2 className="title">My Projects</h2>
      <div className="underline"></div>
      <div className="projectsContainer">
        {projectsData.map((project) => {
          return <Project key={project.id} {...project}></Project>;
        })}
      </div>
    </div>
  );
};

export default Projects;
