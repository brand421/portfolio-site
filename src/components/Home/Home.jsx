import "./home.css";
import React from "react";
import mountainPhoto from "../../images/greeting_square.JPG";
import { motion } from "framer-motion";

export default function Home() {
  const motionVariants = {
    initial: {
      opacity: 0,
      transform: "translateX(-50px)",
      delay: "1s",
      transition: "3s",
    },
    middle: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: "3s",
      delay: "2s",
    },
    leave: {
      opacity: 0,
      transform: "translateX(50px)",
      transition: "2s",
      delay: "2s",
    },
  };
  return (
    <motion.div
      variants={motionVariants}
      initial="initial"
      animate="middle"
      exit="leave"
      className="home__container"
      key="home"
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
