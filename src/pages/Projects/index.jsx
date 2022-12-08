import React from "react";
import "./index.css";
import { projects } from "../../data.js";

function Projects() {
  const handleFlip = (props) => {
    document
      .getElementById(props)
      .classList.add("projects_flip", "projects_flipShadow");
    document.getElementById(props).classList.remove("projects_frontContainer");
  };

  const handleFlipBack = (props) => {
    document
      .getElementById(props)
      .classList.remove("projects_flip", "projects_flipShadow");
  };

  return (
    <div className="projects">
      <div className="projects_container">
        <h1 className="projects_title">Projects</h1>
      </div>
      <div className="projects_subcontainer">
        {projects.map((project) => (
          <div className="projects_projectContainer" key={project.id}>
            <div className="projects_flipContainer" id={`flip${project.id}`}>
              <div className="projects_frontContainer">
                <div className="projects_innercontainer1">
                  <img
                    className="projects_image3"
                    src={project.image3}
                    alt=" "
                  />
                  <img
                    className="projects_image2"
                    src={project.image2}
                    alt=" "
                  />
                  <img
                    className="projects_image1"
                    src={project.image1}
                    alt=" "
                  />
                </div>
                <div className="projects_innercontainer2">
                  <h2 className="projects_innertitle">{project.title}</h2>
                </div>
                <ul className="projects_linkContainer">
                  {project.site.map((items) => (
                    <li className="projects_link" key={items}>
                      <a href={items.link} target="_blank" rel="noreferrer">
                        <button className="projects_button">
                          {items.button}
                        </button>
                      </a>
                    </li>
                  ))}
                  <li className="projects_link">
                    <button
                      className="projects_button"
                      onClick={() => handleFlip("flip" + project.id)}
                    >
                      READ MORE
                    </button>
                  </li>
                </ul>
              </div>

              <div className="projects_backContainer" id={`flip${project.id}`}>
                <div className="projects_innercontainer2">
                  <h2 className="projects_innertitle">{project.title}</h2>
                </div>
                <div className="projects_innercontainer2">
                  <h3 className="projects_innertype">{project.type}</h3>
                </div>
                <div className="projects_innercontainer1">
                  <p className="projects_innertitle">{project.description}</p>
                </div>
                <ul className="projects_listContainer">
                  {project.tech.map((items) => (
                    <li className="projects_list" key={items}>
                      <i>{items}</i>
                    </li>
                  ))}
                </ul>
                <ul className="projects_linkContainer">
                  <li className="projects_link">
                    <button
                      className="projects_button"
                      onClick={() => handleFlipBack("flip" + project.id)}
                    >
                      READ LESS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
