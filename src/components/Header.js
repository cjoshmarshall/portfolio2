import React, { useState } from 'react'
import "./Header.css"

function Header() {

  const handleToggle=()=>{
      document.getElementById("navbar").style.width="100%"
  }

    return (
      <div className="header">
        <div className='header_container'>
          <div className='header_option'><a href="#">HOME</a></div>
            <ul className="header_menu">
                <li className='header_option'><a href="#about">ABOUT</a></li>
                <li className='header_option'><a href="#projects">PROJECTS</a></li>
                <li className='header_option'><a href="#skills">SKILLS</a></li>
                <li className='header_option'><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
          <div className='header_iconContainer'>
              <div className='header_iconToggle' onClick={handleToggle}>
                <i className="header_icon fa-solid fa-bars"></i>          
              </div>
          </div>
      </div>
    );
  }
  
  export default Header;
  