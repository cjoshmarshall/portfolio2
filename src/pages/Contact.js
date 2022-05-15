import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_container'>
        <h1 className='contact_title'>Contact</h1>
        <h1 className='contact_subtitle'>Hire me!</h1>
        <div className='contact_subcontainer'>
          <div className='contact_innercontainer'>
              <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                <i className="contact_icon fa-solid fa-note-sticky"></i>
              </a>
            <p className='contact_innertitle'>Resume</p>
            <p className='contact_innerdescription'>
              <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                <span>Go to my resume</span>
              </a>
            </p>
          </div>
          <div className='contact_innercontainer'>
            <a href='https://www.github.com/cjoshmarshall' target="_blank" rel="noopener noreferrer">
              <i className="contact_icon fa-brands fa-github"></i>
            </a>           
            <p className='contact_innertitle'>Github</p>
            <p className='contact_innerdescription'>              
              <a href='https://www.github.com/cjoshmarshall' target="_blank" rel="noopener noreferrer">
                <span>Go to my Github Profile</span>
              </a>
            </p>
          </div>
          <div className='contact_innercontainer'>
            <a href='tel:+919486684097' rel="noopener noreferrer">
              <i className="contact_icon fa-solid fa-phone"></i>
            </a>           
            <p className='contact_innertitle'>Phone</p>
            <p className='contact_innerdescription'>              
              <a href='tel:+919486684097' rel="noopener noreferrer">
                <span>+919486684097</span>
              </a>
            </p>
          </div>
          <div className='contact_innercontainer'>
            <a href='mailto:cjoshmarshall@gmail.com' rel="noopener noreferrer">
              <i className="contact_icon fa-regular fa-envelope-open"></i>
            </a>           
            <p className='contact_innertitle'>Email</p>
            <p className='contact_innerdescription'>              
              <a href='mailto:cjoshmarshall@gmail.com' rel="noopener noreferrer">
                <span>cjoshmarshall@gmail.com</span>
              </a>
            </p>
          </div>
          <div className='contact_innercontainer'>
            <a href='https://wa.me/+919486684097' target="_blank" rel="noopener noreferrer">
              <i className="contact_icon fa-brands fa-whatsapp"></i>
            </a>           
            <p className='contact_innertitle'>Whatsapp</p>
            <p className='contact_innerdescription'>              
              <a href='https://wa.me/+919486684097' target="_blank" rel="noopener noreferrer">
                <span>+919486684097</span>
              </a>
            </p>
          </div>
        </div>
        <p className='contact_footer'>@2022 Josh Marshall</p>
      </div>
    </div>
  )
}

export default Contact