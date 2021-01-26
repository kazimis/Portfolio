import React from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span>
              <GoThreeBars />
            </span>
          </button>
          <a className="navbar-brand" href="#myPage">
            Developer
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#Projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
