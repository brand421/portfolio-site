import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./contact.css";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { CodeOutlined, FeedOutlined, LinkedIn } from "@mui/icons-material";
import resume from "./Brandan_resume.pdf";

function Contact() {
  return (
    <motion.div
      className="contact__container"
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
      <div>
        <h1 className="contact__header">Want to find out more about me?</h1>
        <div className="contact__links">
          <IconButton
            aria-label="paper"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              color: "white",
            }}
            disableRipple
            href={resume}
            download="Brandan Isaacs.pdf"
            className="contact__icon"
          >
            <FeedOutlined fontSize="large" sx={{ color: "white" }} />
            <h3 className="contact__text">Resume</h3>
          </IconButton>
          <IconButton
            aria-label="email"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              color: "white",
            }}
            href="mailto:brandan.isaacs@gmail.com"
            disableRipple
            className="contact__icon"
          >
            <EmailOutlinedIcon
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
            <h3 className="contact__text">Email</h3>
          </IconButton>
          <IconButton
            aria-label="code"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              color: "white",
            }}
            href="https://github.com/brand421"
            target="_blank"
            rel="noreferrer"
            disableRipple
            className="contact__icon"
          >
            <CodeOutlined fontSize="large" sx={{ color: "white" }} />
            <h3 className="contact__text">Github</h3>
          </IconButton>
          <IconButton
            aria-label="linkedin"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              color: "white",
            }}
            href="https://www.linkedin.com/in/brandan-isaacs/"
            target="_blank"
            rel="noreferrer"
            disableRipple
            className="contact__icon"
          >
            <LinkedIn fontSize="large" sx={{ color: "white" }} />
            <h3 className="contact__text">LinkedIn</h3>
          </IconButton>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
