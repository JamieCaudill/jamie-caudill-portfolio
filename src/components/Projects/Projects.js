// Projects.js //

import './Projects.scss';

import ProjectDetails from '../ProjectDetails/ProjectDetails';
import data from '../../data/project-data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useState, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const [project, setProject] = useState(data[0]);
  const [tech, setTech] = useState(data[0].tech)

  const handleClick = (e) => {
    const target = e.target.id;
    setProject(data[target - 1])
    setTech(data[target - 1].tech)
  }

  useLayoutEffect(() => {
    
    gsap.fromTo(".projects__container-header", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: .5,
      scrollTrigger: {
        trigger: ".about__text-paragraph",
        start: "bottom center",
      }
    }
    )
    gsap.fromTo(".projects__item", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: .5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about__container",
        start: "bottom center",
      },
      stagger: {
        amount: 1
      }
    })
  }, [])


  return (
    <div className="projects">

      <div className="projects__container">
        <h1 className="projects__container-header">Projects</h1>
        <div className="projects__item-container">
        <div className="projects__item">
            <img className="projects__item-image" id="1" onClick={handleClick} src={require('../../images/mybalto.png')} alt="project" />
            <h3 id="1" onClick={handleClick}>myBalto Foundation</h3>
          </div>
          <div className="projects__item">
            <img className="projects__item-image" id="2" onClick={handleClick} src={require('../../images/everuse.jpg')} alt="project" />
            <h3 id="2" onClick={handleClick}>EverUse</h3>
          </div>
          <div className="projects__item">
            <img className="projects__item-image" id="3" onClick={handleClick} src={require('../../images/humor-me.jpg')} alt="project" />
            <h3 id="3" onClick={handleClick}>Humor Me</h3>
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