import React from "react";
import { skills } from "./data";
// import styled from "styled-components";
const Skills = () => {
  return (
    <div className="container-fluid padding">
      <div className="row text-center padding justify-content-center">
        {skills.map((skill) => {
          const { id, name, icon, text } = skill;
          return (
            <div key={id} className="col-sm">
              <i className={name + " skill-icon"}>{icon}</i>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
