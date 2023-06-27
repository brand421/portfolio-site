import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import projectItems from "./projectItems";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <div className="heading__text">
        <h1 className="projects__heading">Projects I have worked on</h1>
        <h2 className="projects__subheading">with accompanied Github Link</h2>
      </div>
      <div className="carousel">
        <Carousel
          centerMode
          centerSlidePercentage={75}
          infiniteLoop
          dynamicHeight={false}
          autoPlay
          stopOnHover
          showThumbs={false}
          width="1000px"
          renderIndicator={(clickHandler, isSelected, index) => {
            return <li key={index} style={{ visibility: "none" }} />;
          }}
          statusFormatter={(currentItem, total) => {
            return (
              <p>
                Project {currentItem} of {total}
              </p>
            );
          }}
        >
          {projectItems.map((project, index) => (
            <div>
              <h3 className="carousel__header">{project.projectName}</h3>
              <div>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <div>
                    <img
                      className="carousel__img"
                      src={project.projectImg}
                      alt=""
                      aria-label={project.projectDescr}
                    />
                  </div>
                </a>
              </div>

              <p></p>
              <a href={project.projectGithub} className="github__link">
                Github
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
}
