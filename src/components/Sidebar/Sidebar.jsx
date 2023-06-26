import { IconButton } from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import sidebarItems from "./sidebarItems";
import { Link } from "react-router-dom";
import "./sidebar.css";
import React from "react";

export default function Sidebar() {
  return (
    <nav id="sidebar__container">
      <div className="photo__div">
        <img id="photo" src={portrait} alt="Brandan portrait" />
      </div>
      <div className="menu__items">
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
