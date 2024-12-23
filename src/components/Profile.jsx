import React from "react";
import "./Profile.css";
import myImage from "../assets/Profile.jpg";

export default function Profile({ setView }) {
  function handleclick(newView) {
    setView(newView);
  }

  return (
    <div className="profile">
      <div>
        <img src={myImage} />
      </div>
      <div className="description">
        <h1 className="text-left">Hello</h1>
        <p className="text-left">
          <b> A Bit About Me</b>
          <br></br>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <div className="circleContainer">
          <p className="circle yellow">
            <a>
              <button onClick={() => handleclick("resume")}>Resume</button>
            </a>
          </p>
          <p className="circle red">
            <a>
              <button onClick={() => handleclick("project")}>Project</button>
            </a>
          </p>
          <p className="circle blue">
            <a>
              <button onClick={() => handleclick("contact")}>Contact</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
