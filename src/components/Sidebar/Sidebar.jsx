import { IconButton } from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import sidebarItems from "./sidebarItems";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import "../../App.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({ children }) {
  const [showSidebar, setShowSidebar] = useState(
    window.screen.width < 500 ? false : true
  );

  function handleShowSidebar(width) {
    setShowSidebar(!showSidebar);
  }
  return (
    <div className="container">
      <div className="sidebar">
        <div className="photo__container">
          <div className="photo">
            <img
              src={portrait}
              alt="Brandan portrait"
              onClick={handleShowSidebar}
            />
          </div>
        </div>

        <motion.div
          animate={{
            marginLeft: showSidebar ? "0" : "-250px",
            display: showSidebar ? "" : "none",
            opacity: showSidebar ? 1 : 0,
          }}
          transition={{
            display: { delay: 0.15 },
          }}
          className="sidebar__list"
        >
          {sidebarItems.map((item, index) => (
            <NavLink
              to={item.itemPath}
              key={index}
              className="menu__item"
              activeclassName="active"
            >
              <IconButton sx={{ ":hover": { backgroundColor: "transparent" } }}>
                {item.itemIcon}
              </IconButton>
              <div className="menu__text">{item.itemName}</div>
            </NavLink>
          ))}
        </motion.div>
      </div>
      <motion.main>{children}</motion.main>
    </div>
  );

  // <nav className="sidebar__container">
  //   <div className="photo__div">
  //     <img
  //       className="photo"
  //       src={portrait}
  //       alt="Brandan portrait"
  //       onClick={handleShowSidebar}
  //     />
  //   </div>
  //   <motion.div
  //     animate={{
  //       width: showSidebar ? "75%" : "60%",
  //       opacity: showSidebar ? 0 : 1,
  //     }}
  //     className="menu__items"
  //   >
  //     {sidebarItems.map((item, index) => (
  //       <Link to={item.itemPath} className="menu__item" key={index}>
  //         <IconButton sx={{ ":hover": { backgroundColor: "transparent" } }}>
  //           {item.itemIcon}
  //         </IconButton>
  //         <h3 className="menu__text">{item.itemName}</h3>
  //       </Link>
  //     ))}
  //   </motion.div>
  // </nav>
}
