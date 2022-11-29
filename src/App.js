import './App.css';

import cbc from "./images/covidByCountry.png"

import horsien from "./images/horiseon.png"



import modesto from "./images/modesto.jpg"
import profile from "./images/profile.png"
import runBuddy from "./images/runbuddy.png"
import Untitled from "./images/Untitled.png"
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  let style1 = 'display:inline; float:left; border:1px solid black; border-radius:4%; text-align:center; width:250px;'

  return (
    <div>


      <Header />
      <About />
      <Projects />
      <Footer />

    </div>

  );
}

export default App;
