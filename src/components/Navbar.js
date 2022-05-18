import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    
  const handleToggle=()=>{
    document.getElementById("navbar").style.width="0%"
  }

  return (
    <div className='navbar' id='navbar'>
      <div className='navbar_container'>
        <div className='navbar_iconContainer'>
          <div className='navbar_iconToggle' onClick={handleToggle}>
              <i className="navbar_icon fa-solid fa-xmark"></i>          
          </div>
        </div>
        <ul className='navbar_menu'>
            <li className='navbar_option' onClick={handleToggle}>
              <a href='#'>HOME</a>
            </li>
            <li className='navbar_option' onClick={handleToggle}>
              <a href='#about'>ABOUT</a>
            </li>
            <li className='navbar_option' onClick={handleToggle}>
              <a href='#projects'>PROJECTS</a>
            </li>
            <li className='navbar_option' onClick={handleToggle}>
              <a href='#skills'>SKILLS</a>
            </li>
            <li className='navbar_option' onClick={handleToggle}>
              <a href='#contact'>CONTACT</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar