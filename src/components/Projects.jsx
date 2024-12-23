import React from "react";
import "./Projects.css";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2_2.png";
import project3Image from "../assets/project3.png";

export default function () {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project1">
        <div className="halfView">
          <h3>Fact Checking Using RAG</h3>
          <ul>
            <li>
              This is a group project where we worked on evaluating a given
              claim to be true/false/No Enough Information classes.
            </li>
            <li>
              we used mocheg dataset which is made of multimodal facts related
              to politics, this consits of context for a claim to evaluated,
              claim and the explanation of the given ground truth label.
            </li>
            <li>
              We construct a KG based on the given context by extracting
              triplets from the context and representing these triplets using
              various graph embedding techniques(transE / distMult).
            </li>
            <li>
              For a given claim we extract the entities in the claim and search
              for a relation between these entities in the Knowledge Graph and
              provide these relation triplets as context to a LLM in our case
              LLama-2-7B model is used to decide based on the triplets if the
              claim is true or false or No Enough Information(NEI). The results
              for this are summaries in the image followed by
            </li>
          </ul>
        </div>
        <div className="halfView">
          <img src={project1Image} alt="project1" />
        </div>
      </div>
      <div className="project1 even">
        <div className="halfView">
          <img src={project2Image} alt="project1" />
        </div>
        <div className="halfView">
          <h3>Duel Dynamics</h3>
          <ul>
            <li style={{ textAlign: "left" }}>
              Developed a secure authentication system with cookie-based
              authentication and JWT, safeguarding user data and maintaining
              persistent sessions.
            </li>
            <li style={{ textAlign: "left" }}>
              Implemented two player gaming applications using socket.io to
              experience data transfer between different users.
            </li>
            <li style={{ textAlign: "left" }}>
              Developed a user dashboard where users can track all his past
              games, score, streak and his past opposition players.
            </li>
          </ul>
        </div>
      </div>
      <div className="project1">
        <div className="halfView">
          <h3>College Event Management System</h3>
          <ul>
            <li style={{ textAlign: "left" }}>
              Built a fully functional event management website where different
              clubs can list their events on the webpage and students who are
              interested can enroll in the event and book their slots.
            </li>
            <li style={{ textAlign: "left" }}>
              Developed a user-friendly dashboard where users can view all their
              enrollments, manage them, and closely monitor the status of their
              enrolled events.
            </li>
            <li>
              Integrated MySQL as the database, implementing all CRUD
              operations.
            </li>
          </ul>
        </div>
        <div className="halfView">
          <img src={project3Image} alt="project1" />
        </div>
      </div>
    </div>
  );
}
