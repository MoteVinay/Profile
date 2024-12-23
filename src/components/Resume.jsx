import React from "react";
import "./Resume.css";

export default function () {
  return (
    <div>
      <div className="row">
        <h1>Resume</h1>
      </div>

      <div className="row">
        <div className="col-sm">
          <h3>Work Experience</h3>
        </div>
        <div className="col-lg">
          <div className="row">
            <div className="col-sm">
              <span>2024-present</span>
            </div>
            <div className="col-lg">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis nulla hic, adipisci assumenda nostrum itaque modi
                maiores omnis, molestias velit amet illum, asperiores nemo quia
                eaque delectus sequi labore doloribus.
              </p>
              <ul>
                <li style={{ textAlign: "left" }}>item1</li>
                <li>item1</li>
                <li>item1</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <span>2024-present</span>
            </div>
            <div className="col-lg">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis nulla hic, adipisci assumenda nostrum itaque modi
                maiores omnis, molestias velit amet illum, asperiores nemo quia
                eaque delectus sequi labore doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "98%" }} />
      <div className="row">
        <div className="col-sm">
          <h3>
            Work Experience some very long Title that crosses one line capacity
          </h3>
        </div>
        <div className="col-lg">
          <div className="row">
            <div className="col-sm">
              <span>2024-present</span>
            </div>
            <div className="col-lg">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis nulla hic, adipisci assumenda nostrum itaque modi
                maiores omnis, molestias velit amet illum, asperiores nemo quia
                eaque delectus sequi labore doloribus.
              </p>
              <ul>
                <li style={{ textAlign: "left" }}>item1</li>
                <li>item1</li>
                <li>item1</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <span>2024-present</span>
            </div>
            <div className="col-lg">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis nulla hic, adipisci assumenda nostrum itaque modi
                maiores omnis, molestias velit amet illum, asperiores nemo quia
                eaque delectus sequi labore doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
