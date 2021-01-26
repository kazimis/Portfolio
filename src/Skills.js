import React from "react";
import { skills } from "./data";
import Experience from "./Experience";
const Skills = () => {
  return (
    <div
      id="portfolio"
      className="container-fluid text-center bg-grey slideanim"
    >
      <h1 className="title">Technical Skills/Experience</h1>
      <div className="row">
        {skills.map((skill) => {
          const { id, name, icon } = skill;
          return (
            <div className="col-xs-2" key={id}>
              <span className="logo-small">{icon}</span>
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
      <div className="text-left">
        <Experience />
      </div>
      <br />
    </div>
  );
};

export default Skills;
