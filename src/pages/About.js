import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about'>
      <div className='about_container'>
        <h1 className='about_title'>About me</h1>
        <div className='about_subcontainer'>
          <p className='about_description'>Hi, I am Joshua Marshall. I'm a <span>Full Stack Developer</span> focusing on the <span>MERN</span> stack, currently based in Tirunelveli, Tamilnadu.</p>
          <p className='about_description'>I got a bachelor's degree on Electronics and Communications Engineering with a GPA of 6.62</p>
        </div>
        <div className='about_subcontainer'>
          <p className='about_description'>I mostly specilize in Front End, whether pinching creative ideas, even designing the site and building the whole website from scratch with the Back end.</p>
        </div>
        <div className='about_subcontainer'>
          <p className='about_description'>Currently I've developed a few <span>Full Stack</span> projects that are showcased below.</p>
        </div>
      </div>
    </div>
  )
}

export default About