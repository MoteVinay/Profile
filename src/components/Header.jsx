import React from "react";
import "./Header.css";

export default function Header({ view, setView }) {
  function handleclick(newView) {
    setView(newView);
  }

  return (
    <div className="header">
      <h3>
        <button className="profileBtn" onClick={() => handleclick("profile")}>
          <b>Mote Vinay Kumar</b>
        </button>
        <span style={{ paddingLeft: "3px", fontWeight: "normal" }}> SDE</span>
      </h3>

      <div>
        <p>
          <button className="headerBtn" onClick={() => handleclick("resume")}>
            Resume
          </button>
        </p>
        <hr
          style={{
            width: "auto",
            height: "1.5em",
            alignSelf: "center",
            margin: "1%",
          }}
        />
        <p>
          <button className="headerBtn" onClick={() => handleclick("project")}>
            Projects
          </button>
        </p>
        <hr
          style={{
            width: "auto",
            height: "1.5em",
            alignSelf: "center",
            margin: "1%",
          }}
        />
        <p>
          <button className="headerBtn" onClick={() => handleclick("contact")}>
            Contact
          </button>
        </p>
      </div>
    </div>
  );
}
