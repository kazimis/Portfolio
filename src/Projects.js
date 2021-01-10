import React from "react";
import Project from "./Project";
import projects, { projectsData } from "./data";
const Projects = () => {
  return (
    <div className="projectsContainer">
      {/* <h2 className="title">My Projects</h2> */}
      {projectsData.map((project) => {
        return <Project key={project.id} {...project}></Project>;
      })}
    </div>
  );
};

export default Projects;
