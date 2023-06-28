import React from "react";
import { motion } from "framer-motion";
import "./about.css";

export default function About() {
  return (
    <motion.div
      className="about__container"
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
      <div className="about__item"></div>
      <div className="about__item">
        <img alt="Brandan and his wife"></img>
      </div>
      <div className="about__item about__text">
        <h1 className="about__header">Hi, I'm Brandan</h1>
        <p>I'm a hobbyist full stack developer that would love to
        join your team</p>
      </div>
      <div className="about__item"></div>
    </motion.div>
  );
}
