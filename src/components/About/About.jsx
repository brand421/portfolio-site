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
        transition: "2s",
      }}
      animate={{
        opacity: 1,
        transform: "translateX(0px)",
        transition: "2s",
        delay: "2s",
      }}
      exit={{
        opacity: 0,
        transform: "translateX(-50px)",
        transition: { duration: 0.1 },
      }}
    >
      <div>
        <h1 className="about__text">this is my about section</h1>
      </div>
    </motion.div>
  );
}
