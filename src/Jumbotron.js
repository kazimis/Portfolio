import React from "react";
const Jumbotron = () => {
  function exploreTo() {
    document.getElementById("Projects").scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="jumbotron text-center">
      <h1>Portfolio</h1>
      <br />
      <button onClick={exploreTo} type="button" className="btn btn-danger">
        Explore
      </button>
    </div>
  );
};

export default Jumbotron;
