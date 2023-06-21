import React from "react";
import "./landing.css";
import mountainphoto from "../../images/greeting_img.JPG"

function Landing() {
  return (
    <div className="landing">
      <div className="landing__photo">
        <img src={mountainphoto} alt="Brandan"></img>
      </div>
      <div className="landing__text">
        <h1 className="landing__header">Hi, I'm Brandan</h1>
        <h3 className="landing__greeting">A Full Stack Developer</h3>
      </div>
    </div>
  );
}

export default Landing;
