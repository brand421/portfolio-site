import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import projectItems from "./projectItems";

export default function Projects() {
  return (
    <motion.div
      className="projects__container"
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
        transition: "2s",
        delay: "2s",
      }}
    >
      <div className="heading__text">
        <h1 className="projects__heading">Completed Projects</h1>

        <div className="projects__subheading">
          <h3>
            <a
              href="https://github.com/brand421"
              target="_blank"
              rel="noreferrer"
            >
              Click here to check out my Github page
            </a>
            , or click on an image to check out the specific project!
          </h3>
        </div>
      </div>
      <div className="project__column">
        {projectItems.map((project, index) => (
          <div className="project__tile">
            <h3 className="project__header">{project.projectName}</h3>
            <div>
              <a
                href={
                  project.projectLink === ""
                    ? project.projectGithub
                    : project.projectLink
                }
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img
                    className="project__img"
                    src={project.projectImg}
                    alt=""
                    aria-label={project.projectDescr}
                  />
                </div>
              </a>
            </div>

            <br></br>
            <p className="">{project.projectDescr}</p>
            <br />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
