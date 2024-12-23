import React from "react";
import "./Footer.css";
import gitImage from "../assets/github.png";
import linImage from "../assets/linkedin.png";

function Footer() {
  return (
    <div>
      <hr style={{ width: "98%" }} />
      <div className="footer">
        <div className="tile">
          <p>
            <b>Phone</b>
          </p>
          <p>+918367057210</p>
        </div>
        <div className="tile">
          <p>
            <b>Email</b>
          </p>
          <a href="mailto:mvk7210@gmail.com?">mvk7210@gmail.com</a>
        </div>
        <div className="tile">
          <p>
            <b>Social Handles</b>
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/motevinaykumar/"
              target="_blank"
            >
              <img src={linImage} alt="linkedIn" />
            </a>
            <a href="https://github.com/MoteVinay" target="_blank">
              <img src={gitImage} alt="gutHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
