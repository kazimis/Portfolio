import React from "react";
import logo from "./img/logo.png";
import { links, social } from "./data";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid padding">
        <div className="row text-center">
          <div class="col-md-4">
            <img src={logo} style={{ height: "50px" }} />
          </div>
          <div class="col-md-4">
            <h5>Contact</h5>
            <hr className="light"></hr>
            <p>604-441-6297</p>
            <p>sarajkazimi@gmail.com</p>
            <p>100 street name</p>
          </div>
          <div class="col-md-4">
            <h5>Connect</h5>
            <hr className="light"></hr>
            <ul style={{ listStyleType: "none" }}>
              {social.map((item) => {
                const { id, url, icon } = item;
                return (
                  <li key={id} className="nav-item">
                    <a className="nav-link text-red" href={url}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12">
            <hr class="light-100"></hr>
            <h5>&copy;</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
