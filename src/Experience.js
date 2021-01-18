import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { jobsData } from "./data";
const Experience = () => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobsData[value];
  return (
    <>
      <div className="container-fluid padding">
        <div className="row title text-center">
          <div className="col-12">
            <h2>Experience</h2>
          </div>
          <hr></hr>
        </div>
      </div>
      <section className="section">
        <div className="jobs-center">
          <div className="btn-containder">
            {jobsData.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  <h3>{item.company}</h3>
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4> {company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;
