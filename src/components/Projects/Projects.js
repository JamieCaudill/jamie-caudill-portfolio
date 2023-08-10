// Projects.js //

import './Projects.scss';

import ProjectDetails from '../ProjectDetails/ProjectDetails';
import data from '../../data/project-data';

import { useState } from 'react';

const Projects = () => {

  const [project, setProject] = useState({});
  const [tech, setTech] = useState([])

  const handleClick = (e) => {
    const target = e.target.id;
    setProject(data[target - 1])
    setTech(data[target - 1].tech)
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__item">
          <img className="projects__item-image" id="1" onClick={handleClick} src={require('../../images/humor-me.png')} alt="project" />
        </div>
        <div className="projects__item">
          <img className="projects__item-image" id="2" onClick={handleClick} src={require('../../images/zen-tacos.png')} alt="project" />
        </div>
        <div className="projects__item">
          <img className="projects__item-image" id="3" onClick={handleClick} src={require('../../images/overlook.png')} alt="project" />
        </div>
        <div className="projects__item">
          <img className="projects__item-image" id="4" onClick={handleClick} src={require('../../images/whats-cookin.png')} alt="project" />
        </div>
      </div>
      <div className="projects__project-details">
        {!tech.length || <ProjectDetails project={project} tech={tech}/>}
      </div>
    </div>
  )
}

export default Projects;