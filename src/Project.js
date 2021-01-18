import React, { useState } from "react";

const Project = ({ id, image, info, price, name, removeProject }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="col-lg-4 col-xl-3">
      <div class="card h-100">
        <img className="card-img-top" src={image} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{info}</p>
          <a href="#" className="btn btn-outline-secondary">
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
