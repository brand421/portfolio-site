import { motion } from "framer-motion";
import "./projects.css";
import projectItems from "./projectItems";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function Projects() {
  // const [hoverText, setHoverText] = useState(false);

  // function handleMouseHover() {
  //   setHoverText = !hoverText;
  // }

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
        {projectItems.map((project, index) => (
          <>
            <Carousel
              centerMode={true}
              dynamicHeight={false}
              autoFocus={true}
              showThumbs={false}
            >
              <div>
                <h3>{project.projectName}</h3>
                <img
                  className="carousel__img"
                  src={project.projectImg}
                  alt=""
                  title="Click to see this project!"
                />
                <p>{project.projectDescr}</p>
                <a href={project.projectGithub}>Github</a>
              </div>
            </Carousel>
          </>
        ))}
      </div>
    </motion.div>
  );
}
