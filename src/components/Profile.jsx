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
        <h1 className="text-left">Hello there !!</h1>
        <p className="text-left">
          <b> My Self </b>  <i>"Mote Vinay Kumar."</i>
          <br></br>I am an upcoming computer science graduate from (NIT)
          National Institute of technology, Andhra Pradesh graduating in 2025.
          <br></br> I am actively searching for a software role where I can
          contribute to real world applications by constant learning and making
          meaningfull contributions.
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
