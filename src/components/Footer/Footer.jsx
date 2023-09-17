import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-row-1">
          <div className="footer-r1-c1">
            <img src="Images/logo.svg" alt="Retink Logo" />
            <span>Get Early Access</span>
            <span>Provide Feedback</span>
          </div>
          <div className="footer-r1-c2">
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Imprint</li>
              <li>Fp</li>
            </ul>
          </div>
          <div className="footer-r1-c3">
            <span>Connect</span>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
        </div>
        <div className="footer-row-2">
          <span>Copyright © 2023 Retink</span>
          <span>
            <ul>
              <li>Terms of Service</li>
              <li>Cookies Policy</li>
              <li>Terms of Service</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
