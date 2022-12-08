import React from "react";
import "./index.css";

function Navbar() {
  const handleToggle = () => {
    document.getElementById("navbar").style.width = "100%";
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_option">
          <a href="#">HOME</a>
        </div>
        <ul className="navbar_menu">
          <li className="navbar_option">
            <a href="#about">ABOUT</a>
          </li>
          <li className="navbar_option">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="navbar_option">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="navbar_option">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar_iconContainer">
        <div className="navbar_iconToggle" onClick={handleToggle}>
          <i className="navbar_icon fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
