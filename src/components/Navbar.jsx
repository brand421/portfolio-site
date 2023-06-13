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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;