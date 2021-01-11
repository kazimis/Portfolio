import React, { useState } from "react";

const Project = ({ id, image, info, price, name, removeProject }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-project">
      <footer>
        <img src={image} alt={name} />
        <div className="project-info">
          <h4>{name}</h4>
        </div>
        <button className="btn" onClick={() => removeProject(id)}>
          Link
        </button>
      </footer>
    </article>
  );
};

export default Project;
