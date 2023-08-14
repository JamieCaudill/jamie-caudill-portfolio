// Projects.js //

import './Projects.scss';

import ProjectDetails from '../ProjectDetails/ProjectDetails';
import data from '../../data/project-data';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useState, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const [project, setProject] = useState({});
  const [tech, setTech] = useState([])

  const handleClick = (e) => {
    const target = e.target.id;
    setProject(data[target - 1])
    setTech(data[target - 1].tech)
  }

  useLayoutEffect(() => {
    
    gsap.fromTo(".projects__container-header", {
      x: -500,
    },
    {
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".projects__container-header",
        start: "top center",
      }
    }
    )
    gsap.fromTo(".projects__item", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".projects__item",
        start: "top center",
      },
      stagger: {
        amount: 1.5

      }
    })
  }, [])


  return (
    <div className="projects">

      <div className="projects__container">
        <h1 className="projects__container-header">Projects</h1>
        <div className="projects__item-container">
          <div className="projects__item">
            <Link to="projects__project-details" spy={true} smooth={true} offset={0} duration={500}><img className="projects__item-image" id="1" onClick={handleClick} src={require('../../images/humor-me.png')} alt="project" /></Link>
            <h3>Humor Me</h3>
          </div>
          <div className="projects__item">
            <Link to="projects__project-details" spy={true} smooth={true} offset={0} duration={500}><img className="projects__item-image" id="2" onClick={handleClick} src={require('../../images/zen-tacos.png')} alt="project" /></Link>
            <h3>Zen Tacos</h3>
          </div>
          <div className="projects__item">
            <Link to="projects__project-details" spy={true} smooth={true} offset={0} duration={500}><img className="projects__item-image" id="3" onClick={handleClick} src={require('../../images/overlook.png')} alt="project" /></Link>
            <h3>Overlook</h3>
          </div>
          <div className="projects__item">
            <Link to="projects__project-details" spy={true} smooth={true} offset={0} duration={500}><img className="projects__item-image" id="4" onClick={handleClick} src={require('../../images/whats-cookin.png')} alt="project" /></Link>
            <h3>What's Cookin'</h3>
          </div>
        </div>
      </div>
      <div className="projects__project-details">
        {!tech.length || <ProjectDetails project={project} tech={tech}/>}
      </div>
    </div>
  )
}

export default Projects;