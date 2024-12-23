import React from "react";
import "./Contact.css";

export default function () {
  return (
    <div className="contact twoTiles">
      <div className="">
        <div>
          <h1>Contact</h1>
          <p>Looking forward to hear from you.</p>
        </div>
        <div>
          <h3>Mobile</h3>
          <p>+91-8367057210</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>mvk7210@gmail.com</p>
        </div>
      </div>
      <div>
        <form action="submit" className="form">
          <div className="row">
            <div className="col-2">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" />
            </div>
            <div className="col-2">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <label htmlFor="email">Email *</label>
              <input type="text" id="email" />
            </div>
            <div className="col-2">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <label htmlFor="message">Message *</label>
            </div>
          </div>
          <div className="row">
              <textarea type="text" id="message" />
          </div>
          <div className="row">
            <button className="longBtn"><b>Submit</b></button>
          </div>
        </form>
      </div>
    </div>
  );
}
