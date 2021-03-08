import React from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          Developer
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GoThreeBars />
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto my-2 my-lg-0">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#Skill">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-custom navbar-fixed-top">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle"
    //         data-toggle="collapse"
    //         data-target="#myNavbar"
    //       >
    //         <span>
    //           <GoThreeBars />
    //         </span>
    //       </button>
    //       <a className="navbar-brand" href="#myPage">
    //         Developer
    //       </a>
    //     </div>
    //     <div className="collapse navbar-collapse" id="myNavbar">
    //       <ul className="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#about">ABOUT</a>
    //         </li>
    //         <li>
    //           <a href="#portfolio">PORTFOLIO</a>
    //         </li>
    //         <li>
    //           <a href="#Projects">PROJECTS</a>
    //         </li>
    //         <li>
    //           <a href="#contact">CONTACT</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
export default Navbar;
