import React from 'react'
import "./Skills.css"

function Skills() {
  return (
    <div className='skills'>
      <div className='skills_container'>
        <h1 className='skills_title'>Skills</h1>
        <div className='skills_subcontainer'>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-js-square"></i>
            <p>Javascript</p>
          </div>
          <div className='skills_innercontainer'>
            <i class="skills_icon fa-solid fa-scroll"></i>
            <p>Typescript</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-react"></i>
            <p>ReactJS</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-node-js"></i>
            <p>NodeJS</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-solid fa-database"></i>
            <p>MySQL</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-solid fa-leaf"></i>
            <p>MongoDB</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-git-alt"></i>
            <p>Git</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-npm"></i>
            <p>npm</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-brands fa-yarn"></i>
            <p>yarn</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-solid fa-cloud"></i>
            <p>AWS</p>
          </div>
          <div className='skills_innercontainer'>
            <i className="skills_icon fa-solid fa-eye"></i>
            <p>Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills