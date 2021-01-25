import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { jobsData } from "./data";
const Experience = () => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobsData[value];
  return (
    <>
      <div className="custom-container">
        <div class="btn-group" role="group">
          {jobsData.map((item, index) => {
            return (
              <button
                type="button"
                className="btn btn-primary btn-xs"
                key={item.id}
                onClick={() => setValue(index)}
              >
                <h3>{item.company}</h3>
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h4
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            {title}
          </h4>
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
    </>
  );
};

export default Experience;
