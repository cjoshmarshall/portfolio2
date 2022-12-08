import React from "react";
import "./index.css";

function Sidebar() {
  const handleToggle = () => {
    document.getElementById("sidebar").style.width = "0%";
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_iconContainer">
          <div className="sidebar_iconToggle" onClick={handleToggle}>
            <i className="sidebar_icon fa-solid fa-xmark"></i>
          </div>
        </div>
        <ul className="sidebar_menu">
          <li className="sidebar_option" onClick={handleToggle}>
            <a href="#">HOME</a>
          </li>
          <li className="sidebar_option" onClick={handleToggle}>
            <a href="#about">ABOUT</a>
          </li>
          <li className="sidebar_option" onClick={handleToggle}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="sidebar_option" onClick={handleToggle}>
            <a href="#skills">SKILLS</a>
          </li>
          <li className="sidebar_option" onClick={handleToggle}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
