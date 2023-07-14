import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import aboutPhoto from "../../images/aboutPhoto.jpg";
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
        transform: "translateX(50px)",
        transition: 1,
      }}
    >
      <div className="about__item">
        <img
          className="about__photo"
          src={aboutPhoto}
          alt="Brandan and his wife"
        />
      </div>
      <div className="about__item about__text">
        <h1 className="about__header">Hi, I'm Brandan</h1>
        <h3>I'm a hobbyist full stack developer</h3>
        <p>
          that would love to join your team. I started my programming journey in
          October of 2022, and dabbled in a couple different disciplines before
          settling on Full Stack Development with a focus on the MERN stack.
          <br></br>
          <br></br>
          Outside of coding, I enjoy hockey (both playing and watching), as well
          as playing guitar. I also run my own home server out of the basement
          for file backup and media storage.
        </p>
      </div>
    </motion.div>
  );
}
