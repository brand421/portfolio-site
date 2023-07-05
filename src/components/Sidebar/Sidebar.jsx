import { IconButton } from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import sidebarItems from "./sidebarItems";
import { Link } from "react-router-dom";
import "./sidebar.css";
import React, { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <nav className="sidebar__container">
      <div className="photo__div">
        <img
          className="photo"
          src={portrait}
          alt="Brandan portrait"
          onClick={handleShowSidebar}
        />
      </div>
      <div className={`menu__items ${showSidebar && "inactive"}`}>
        {sidebarItems.map((item, index) => (
          <Link to={item.itemPath} className="menu__item" key={index}>
            <IconButton sx={{ ":hover": { backgroundColor: "transparent" } }}>
              {item.itemIcon}
            </IconButton>
            <h3 className="menu__text">{item.itemName}</h3>
          </Link>
        ))}
      </div>
    </nav>
  );
}
