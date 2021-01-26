import React from "react";
import { social } from "./data";
const Footer = () => {
  return (
    <footer className="site-footer">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                saraj-kazimi.netlify.app.com is my portfolio to showcase all my
                personal projects. This porjects build concepts in different
                programming languages which include C, C++, Java, HTML, CSS,
                Bootstrap, JavaScript, Android, SQL and Algorithm.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Contact</h6>
              <ul className="footer-links">
                <li>
                  <a href="tel:(+1)604-441-6297">(+1) 604-441-6297</a>
                </li>
                <li>
                  <a href="http://www.gmail.com/">sarajkazimi@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by
                <a href="https://saraj-kazimi.netlify.app"> Samlpe</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                {social.map((item) => {
                  const { id, name, url, icon } = item;
                  return (
                    <li key={id}>
                      <a className={name} href={url}>
                        <i>{icon}</i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};
export default Footer;
