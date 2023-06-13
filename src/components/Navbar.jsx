import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1 id="nameHeader">Brandan Isaacs</h1>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/about">About Me</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;