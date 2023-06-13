import React from "react";

function Navbar() {
    return (
        <nav>
            <div>
               <h1 id="nameHeader">Brandan Isaacs</h1> 
            </div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;