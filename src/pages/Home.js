import React from 'react'
import "./Home.css"

function Home() {
    return (
      <div className="home">
        <div className='home_container'>
          <h1 className='home_title'>Joshua Marshall</h1>
          <p className='home_description'><span>FULL STACK DEVELOPER</span></p>
          <div className='home_buttonContainer'>
            <a href='https://drive.google.com/file/d/1VaOT_bj3izsFctooxw18qdH_QrFhDkNu/view' target="_blank" rel="noopener noreferrer">
              <button className='home_button'>VIEW RESUME</button>
            </a>
            <a href='https://www.github.com/cjoshmarshall' target="_blank" rel="noopener noreferrer">
              <button className='home_button'>VIEW GITHUB</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  