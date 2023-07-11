import "./home.css";
import React from "react";
import mountainPhoto from "../../images/greeting_square.JPG";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home__container"
      initial={{
        opacity: 0,
        transform: "translateX(-50px)",
        delay: "1s",
        transition: "3s",
      }}
      animate={{
        opacity: 1,
        transform: "translateX(0px)",
        transition: "3s",
        delay: "2s",
      }}
      exit={{
        opacity: 0,
        transform: "translateX(-50px)",
        transition: { duration: 0.1 },
      }}
    >
      <div className="home__item home__text">
        <h1>Brandan Isaacs</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="home__item">
        <img src={mountainPhoto} alt="" />
      </div>
    </motion.div>
  );
}
