import React from "react";
import logo from "./img/logo.png";
import { GoThreeBars } from "react-icons/go";
import { links, social } from "./data";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-md navbar-light bg-dark sticky-top">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       <img src={logo} alt="logo" style={{ height: "40px" }} />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarResponsive"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       {/* links */}
    //       <ul className="navbar-nav ml-auto">
    //         {links.map((link) => {
    //           const { id, url, text } = link;
    //           return (
    //             <li
    //               key={id}
    //               className={`nav-item ${text === "home" && "active"}`}
    //             >
    //               <a className="nav-link text-white" href={url}>
    //                 {text}
    //               </a>
    //             </li>
    //           );
    //         })}
    //       </ul>

    //       {/* social icons  */}
    //       <ul className="navbar-nav ml-auto">
    //         {social.map((item) => {
    //           const { id, url, icon } = item;
    //           return (
    //             <li key={id} className="nav-item">
    //               <a className="nav-link text-white" href={url}>
    //                 {icon}
    //               </a>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-default navbar-fixed-top">
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
