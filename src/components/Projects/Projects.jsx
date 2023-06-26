import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

export default function Projects() {
  return (
    <motion.div
      className="projects__container"
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
      <h1 className="projects__heading">Projects I have worked on</h1>
      <h2 className="projects__subheading">with accompanied Github Link</h2>
    </motion.div>
  );
}
