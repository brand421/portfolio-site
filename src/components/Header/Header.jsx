import React from "react";
import './header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Brandan Isaacs</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#Home" className="nav__link active__link">
                                <i className="bx bx-home-alt nav__icon"></i>Home
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
                    <i class='bx bx-x nav__close'></i>
                </div>
                <div className="nav__toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;