import "./home.css";
import React from "react";
import mountainPhoto from "../../images/greeting_square.JPG";

function Home() {

  return (
    <div className="home__container">
      <div className="home__item"></div>
      <div className="home__item home__text">
        <h1>Hi, I'm Brandan</h1>
        <h3>A Full Stack Developer</h3>
      </div>
      <div className="home__item">
        <img src={mountainPhoto} alt="" />
      </div>
      <div className="home__item"></div>
    </div>
  );
}

export default Home;
