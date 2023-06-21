import React, { useState } from "react";
import portrait from "../../images/Brandon.jpg";
import "./header.css";

function SideMenu() {
  const [sidebar, setSidebar] = useState(false);

  function handleSidebarOpen() {
    setSidebar(true);
  }

  function handleSidebarClose() {
    setSidebar(false);
  }
  return (
    <header className="side__menu">
      <nav className="nav container">
        <div className="portait">
          <img src={portrait} alt="Brandan portrait" />
        </div>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#Home" className="nav__link active__link">
                <i className="bx bx-home-alt nav__icon"></i>
                <p>Home</p>
              </a>
            </li>
            <li className="nav__item">
              <a href="#Projects" className="nav__link">
                <i className="bx bx-folder nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="bx bx-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link">
                <i className="bx bx-envelope nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i class="bx bx-x nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default SideMenu;
