import React from "react";
import { skills } from "./data";
// import Experience from "./Experience";
const Skills = () => {
  return (
    <section class="page-section" id="Skill">
      <div class="container">
        <h2 class="text-center mt-0">Technical Skills</h2>
        <hr class="divider my-4" />
        <div class="row">
          {skills.map((skill) => {
            const { id, name, icon } = skill;
            return (
              <div class="col-lg-2 col-md-4 col-sm-6 text-center">
                <div class="mt-5">
                  <i className="icon text-primary mb-4">{icon}</i>
                  {/* <i class="fas fa-4x fa-gem text-primary mb-4"></i> */}
                  <h3 className="h4 mb-2">{name}</h3>
                  {/* <p class="text-muted mb-0">
                    Our themes are updated regularly to keep them bug free!
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
