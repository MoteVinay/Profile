import React from "react";
import "./Resume.css";

export default function () {
  return (
    <div>
      <div className="resumeRow">
        <h1>Resume</h1>
      </div>

      <div className="resumeRow">
        <div className="col-sm">
          <h2>Education</h2>
        </div>
        <div className="col-lg">
          <div className="resumeRow">
            <div className="col-sm">
              <span>2021-present</span>
            </div>
            <div className="col-lg">
              <h4>National Institute of Technology, Andhra Pradesh</h4>

              <ul>
                <li style={{ textAlign: "left" }}>CGPA : 7.66</li>
              </ul>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span>2018-2020</span>
            </div>
            <div className="col-lg">
              <h4>Sri Chaitanya Junior College, Hyderabad</h4>

              <ul>
                <li style={{ textAlign: "left" }}>Percentage: 96.3%</li>
              </ul>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span>2018</span>
            </div>
            <div className="col-lg">
              <h4>V.V.Central Public School, Khammam</h4>

              <ul>
                <li style={{ textAlign: "left" }}>Percentage: 83%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "98%" }} />
      <div className="resumeRow">
        <div className="col-sm">
          <h2> Projects </h2>
        </div>
        <div className="col-lg">
          <div className="resumeRow">
            <div className="col-sm">
              <span>2024-2025</span>
            </div>
            <div className="col-lg">
              <h4>Fact Checking Using RAG </h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Conducting a comparative analysis of multiple graph embedding
                  techniques to evaluate their effectiveness in representing
                  Knowledge Graphs.
                </li>
                <li style={{ textAlign: "left" }}>
                  Constructing and utilizing a Knowledge Graph as external
                  context for a Language Model.
                </li>
                <li style={{ textAlign: "left" }}>
                  Designing a predictive model to determine if claims are
                  supported or refuted, leveraging the LangChain framework.
                </li>
              </ul>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span>April 2024</span>
            </div>
            <div className="col-lg">
              <h4>Duel Dynamics</h4>
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
          <div className="resumeRow">
            <div className="col-sm">
              <span>April 2023</span>
            </div>
            <div className="col-lg">
              <h4>College Event Management System</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Built a fully functional event management website where
                  different clubs can list their events on the webpage and
                  students who are interested can enroll in the event and book
                  their slots.
                </li>
                <li style={{ textAlign: "left" }}>
                  Developed a user-friendly dashboard where users can view all
                  their enrollments, manage them, and closely monitor the status
                  of their enrolled events.
                </li>
                <li style={{ textAlign: "left" }}>
                  Integrated MySQL as the database, implementing all CRUD
                  operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "98%" }} />
      <div className="resumeRow">
        <div className="col-sm">
          <h2>Skills</h2>
        </div>
        <div className="col-lg">
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              <h4>Libraries/Tools</h4>
              <p>VS Code, Git/GitHub, MS Office Suite, Linux, AWS Cloud.</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              <h4>Web Development</h4>
              <p>MERN Stack, SQL.</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              <h4>Languages</h4>
              <p>Python, Java, C.</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "98%" }} />
      <div className="resumeRow">
        <div className="col-sm">
          <h2>Achievements and Certifications</h2>
        </div>
        <div className="col-lg">
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              {/* <h4>Libraries/Tools</h4> */}
              <p>AWS Cloud Practitioner</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              <p>LeetCode Contest Rating — 1,472</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span></span>
            </div>
            <div className="col-lg">
              <p>Summer Analytics [IIT Guwahathi]</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "98%" }} />
      <div className="resumeRow">
        <div className="col-sm">
          <h2>Postions held</h2>
        </div>
        <div className="col-lg">
          <div className="resumeRow">
            <div className="col-sm">
              <span>Ongoing</span>
            </div>
            <div className="col-lg">
              <p>Teaching Assistant</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span>2022 – 2023</span>
            </div>
            <div className="col-lg">
              <p>Member of C.S.E.A</p>
            </div>
          </div>
          <div className="resumeRow">
            <div className="col-sm">
              <span>2022 – 2023</span>
            </div>
            <div className="col-lg">
              <p>Executive at Brindavanam Club</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
