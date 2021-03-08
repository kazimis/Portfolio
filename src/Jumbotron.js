import React from "react";
const Jumbotron = () => {
  function exploreTo() {
    document.getElementById("Projects").scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              Always eager to learn new skills
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              Love to challenge myself and solve problem in an efficient and
              creative way
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="#about"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
