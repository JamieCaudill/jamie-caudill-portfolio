// ProjectDetails.js //

import './ProjectDetails.scss';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = ({project, tech}) => {

  useLayoutEffect(() => {
    gsap.fromTo(".project-details__header", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
    )
    gsap.fromTo(".project-details__container", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
  },[project])
  
  const techUsed = tech.map((tech, index) => {
    return <p key={index}>{tech}</p>
  })

  return (
    <div className="project-details">
      <div className="project-details__header">
        <h1>{project.title}</h1>
        <div className="project-details__links">
          <ProjectLinks project={project}/>
        </div>
      </div>
      <div className="project-details__container">
        <div className="project-details__left">
          <div className="project-details__image-container">
            <img className="project-details__image" src={project.gif} alt="project" />
          </div>
          <div className="project-details__tech">
            <div className="project-details__tech-used">
              <ul>
                {techUsed}
              </ul>
            </div>
          </div>
        </div>
        <div className="project-details__right">
          <div className="project-details__summary">
            <p className="project-details__summary-text">{project.summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;