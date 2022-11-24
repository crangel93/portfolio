import React from 'react'
import logoFinal from "../images/logoFinal.png"
import Nav from './Nav'
function Header(){
    return (
        <div className="container">
        <div className="item logo">
    
           <img src={logoFinal} alt=""/>
    
    
    
        </div>
        <div className="item navigation">
<nav>
  <ul>
    <li>
      <h2><a href="index.html">Home</a></h2>
    </li>
    <li>
      <h2><a href="#portfolio">Portfolio</a></h2>
    </li>

    <li>
      <h2><a href="#contact">Contact</a></h2>
    </li>
  </ul>
</nav>
</div>
   
    
    
    
      </div>
    )
}
export default Header