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
            <div
              key={id}
              className="col-xs-12 col-sm-10 col-md-6 col-lg-6 col-xl-2"
            >
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
