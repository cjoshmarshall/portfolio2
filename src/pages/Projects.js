import React from 'react'
import "./Projects.css"
import { projects } from "../data.js"

function Projects() {

  const handleOverlay=(props)=>{
    document.getElementById(props).style.display="block"
  }
  
  const handleDisplay=(props)=>{
    document.getElementById(props).style.display="none"
  }

  return (
    <div className='projects'>
      <div className='projects_container'>
        <h1 className='projects_title'>Projects</h1>
      </div>
          <div className='projects_subcontainer' >
        {projects.map(project=>(
          <div className='projects_wrapper' key={project.id}>
          <div className='projects_projectContainer'>
            <div className='projects_innercontainer1'>
              {/* <img className='projects_image3' src={project.image3} alt=' ' /> */}
              {/* <img className='projects_image2' src={project.image2} alt=' ' /> */}
              <img className='projects_image1' src={project.image1} alt=' ' />
            </div>
            <div className='projects_innercontainer2'>
              <h2 className='projects_innertitle'>{project.title}</h2>
            </div>
            <button className='projects_button' onClick={()=>handleOverlay("overlay"+project.id)}>READ MORE</button>
          </div>
          
          <div className='projects_overlaycontainer' id={`overlay${project.id}`}>
            <div className='projects_overlayiconContainer'>
              <div onClick={()=>handleDisplay("overlay"+project.id)}>
              <i className="projects_overlayicon fa-solid fa-arrow-left"></i>
              </div>
            </div>
              <div className='projects_overlayinnercontainer1'>
                  <img className='projects_overlayimage3' src={project.image3} alt=' ' />
                  <img className='projects_overlayimage2' src={project.image2} alt=' ' />
                  <img className='projects_overlayimage1' src={project.image1} alt=' ' />
              </div>
              <div className='projects_overlayinnercontainer2'>
                <h2 className='projects_overlayinnertitle'>{project.title}</h2>
                <ul className='projects_overlaylistContainer'>
                  {project.tech.map(items => (
                    <li className='projects_overlaylist' key={items}>{items}</li>
                  ))}
                </ul>
                <div className='projects_overlaydescriptionContainer'>
                  <p className='projects_overlaydescription'>Description:</p>
                  <p>{project.description}</p>
                </div>
                <ul className='projects_overlaylinkContainer'>
                  <li className='projects_overlaylink'>
                    <a href={project.link} target='_blank' rel="noopener noreferrer">
                      <button className='projects_overlaybutton'>
                        GO TO SITE
                      </button>
                    </a>
                  </li>
                  <li className='projects_overlaylink'>
                    <a href={project.githubclient} target='_blank'>
                      <button className='projects_overlaybutton'>
                        Go to Git-Client
                      </button>
                    </a>
                  </li>
                  <li className='projects_overlaylink'>
                    <a href={project.githubserver} target='_blank'>
                      <button className='projects_overlaybutton'>
                        Go to Git-Server
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>          
        ))}                  
          </div>
    </div>
  )
}

export default Projects