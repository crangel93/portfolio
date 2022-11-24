import React from 'react'
import '../App.css';
// import bg from "./images/background.jpeg"
// import bg2 from "./images/background2.jpg"
import cbc from "../images/covidByCountry.png"
// import glad from "./images/glad.png"
import horsien from "../images/horiseon.png"
// import logo from "./images/logo.png"

// import logoMono from "./images/logoMono.png"
import modesto from "../images/modesto.jpg"
import profile from "../images/profile.png"



function About(){
    let style1 ='display:inline; float:left; border:1px solid black; border-radius:4%; text-align:center; width:250px;'
    let style2="text-align:center; display:inline;"
    let style3="color:black";
    let style4="color:black";


    return(
<div>
        <img src={profile} alt=""style={{width:"25%", float:"left",display:"inline"}}/>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <p style={{style1}}>Hello I
          am a web developer from Modesto, California. I specialize in full stack development. I have my associates degree in
          Computer Science from Modesto Junior College and I am currently attending UC Davis coding bootcamp. I am easy to
          work with and willing to put in the extra work to make my projects and freelance work the best.</p>
        <div className="contact" id="contact" style={{style2}}>
          <h3>Contact Me</h3>
          <p>Phone: (209) 678-2653</p>
          <p>Email:<a href="mailto:christian.j.rangel93@gmail.com" style={{style3}}>christian.j.rangel93@gmail.com</a></p>
          <p>
            <a href="www.linkedin.com/in/christianjrangel1993" style={{style4}}>LinkedIn</a>
          </p>
        </div>
         <img src={modesto} alt="" style={{width:"100%" ,display:"inline"}}/>
      
      
      
      
        <br/>
        <br/> <br/>
        </div>

    )
}
export default About