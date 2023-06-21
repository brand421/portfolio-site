import React from "react";
import "./landing.css";
import mountainphoto from "../../images/greeting_square.JPG";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__text">
        <h1 className="landing__header">Hi, I'm Brandan</h1>
        <h3 className="landing__greeting">A Full Stack Developer</h3>
        <p className="landing__para">
          With a focus on the MERN stack, I bring valuable knowledge and an
          outsider perspective on projects
        </p>
      </div>
      <div className="landing__photo">
        <img src={mountainphoto} alt="Brandan"></img>
      </div>
    </div>
  );
}

export default Landing;
