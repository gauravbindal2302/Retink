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
              <li>
                <img src="Images/facebook.png" alt="Facebook Icon" />
              </li>
              <li>
                <img src="Images/twitter.png" alt="Twitter Icon" />
              </li>
              <li>
                <img src="Images/instagram.png" alt="Instagram Icon" />
              </li>
              <li>
                <img src="Images/linkedin.png" alt="LinkedIn Icon" />
              </li>
              <li>
                <img src="Images/youtube.png" alt="YouTube Icon" />
              </li>
              <li>
                <img src="Images/pinterest.png" alt="Pinterest Icon" />
              </li>
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
