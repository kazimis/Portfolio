import React from "react";
import { projectsData } from "./data";
const Projects = () => {
  return (
    <div id="projects">
      <section class="page-section bg-dark text-white">
        <div class="container text-center">
          <h2 class="mb-4">What I have created</h2>
          <a class="btn btn-light btn-xl" href="https://github.com/kazimis">
            Github
          </a>
        </div>
      </section>
      <div class="container-fluid p-5">
        <h2 class="text-center mt-0">Sample Projects</h2>
        <hr class="divider my-4" />
        <div class="row">
          {projectsData.map((project) => {
            const { id, imgThumb, category, name, link, github } = project;
            const style = link == "NULL" ? "none" : "";
            return (
              <div key={id} className="col-lg-4 col-sm-6 mb-5">
                <div className="projects-box">
                  <img className="img-fluid" src={imgThumb} alt="" />
                  <div className="projects-box-caption">
                    <div className="project-category text-white-50">
                      {category}
                    </div>
                    <div class="project-name">{name}</div>
                    <div className="">
                      <a
                        style={{ margin: "1rem" }}
                        href={github}
                        className="btn btn-info"
                      >
                        Source code
                      </a>
                      <a
                        href={link}
                        style={{ display: style }}
                        className="btn btn-info"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    //   <div id="Projects" className="container-fluid text-center">
    //     <div className="custom-container">
    //       <h1 className="title">Projects</h1>
    //       <h4>What I have created</h4>
    //       <div className="row text-center slideanim">
    //         {projectsData.map((project) => {
    //           const { id, image, info, name, link, github } = project;
    //           return (
    //             <div key={id} className="col-sm-4">
    //               <div className="thumbnail">
    //                 <img src={image} alt="name" width="300" height="300" />
    //                 <p>
    //                   <strong>{name}</strong>
    //                 </p>
    //                 <p>{info}</p>
    //                 <a
    //                   style={{ margin: "1rem" }}
    //                   href={github}
    //                   className="btn btn-info"
    //                 >
    //                   Source code
    //                 </a>
    //                 <a href={link} className="btn btn-info">
    //                   Live Demo
    //                 </a>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // );
  );
};

export default Projects;
