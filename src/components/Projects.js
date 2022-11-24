import React from 'react'
import cbc from "../images/covidByCountry.png"
// import glad from "./images/glad.png"
import horsien from "../images/horiseon.png"
// import logo from "./images/logo.png"

// import logoMono from "./images/logoMono.png"
import modesto from "../images/modesto.jpg"
import profile from "../images/profile.png"
import runBuddy from "../images/runbuddy.png"
import Untitled from "../images/Untitled.png"
import Header from '../components/Header'

function Projects(){

    return (


        <center className="container">
        <div className="portfolio" id="portfolio">
          <h3>
            <p>My Portfolio</p>
          </h3>
    
          <a href="https://crangel93.github.io/horiseon/">
             <img src={horsien}  alt="" className="center" style={{width:"60em", height:"30em"}}/>
             </a><br/>
          <a href="https://crangel93.github.io/run-buddy/">
             <img src={runBuddy} alt="" className="center" style={{width:"30em", height:"15em"}}/>
             </a>
          <a href="https://crangel93.github.io/Covid-By-Country/">
              <img src={cbc} className="center" style={{width:"30em", height:"15em"}} />
             </a>
             <img src={Untitled}className="center" style={{width:"30em", height:"15em"}} />
    
        </div>
       </center> 
    
    
  
    )
}
export default Projects