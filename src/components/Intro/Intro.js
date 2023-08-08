// Intro.js

import './Intro.css'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro__container">
        <h1 className="intro__text">Hi. I'm Jamie.</h1>
        <h1>A Creative.</h1>
        <p>I am also a software developer who crafts captivating UIs. I blend my love for photography and the wilderness to inspire innovative designs.</p>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}><button className="intro__button">View My Work</button></Link>
      </div>
    </div>
  )
}

export default Intro;