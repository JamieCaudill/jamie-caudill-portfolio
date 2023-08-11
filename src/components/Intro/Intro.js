// Intro.js

import './Intro.scss'
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".intro__container", {
      opacity: 0,
    },
    {
      opacity: .7,
      duration: 2,
      delay: 1,
    })
  
    gsap.fromTo(".intro__text-container", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3,
      delay: 1.5,
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="intro__container">
        <div className="intro__text-container">
          <h1 className="intro__text">Hi. I'm Jamie.</h1>
          <h1>A Creative.</h1>
          <p>I am also a software developer who crafts captivating UIs. I blend my love for photography and the wilderness to inspire innovative designs.</p>
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500}><button className="intro__button">View My Work</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Intro;