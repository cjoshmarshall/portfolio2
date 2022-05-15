import React from 'react'
import "./Home.css"

function Home() {
    return (
      <div className="home">
        <div className='home_container'>
          <h1 className='home_description'>Hi, I'm <span>Josh</span> and I build swift, smooth <span>&</span> stunning websites. </h1>
          <div className='home_buttonContainer'>
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
              <button className='home_button'>CHECK OUT MY RESUME</button>
            </a>
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
              <button className='home_button'>GO TO MY GITHUB PROFILE</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  