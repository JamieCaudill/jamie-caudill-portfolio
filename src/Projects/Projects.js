// Projects.js //

import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__item">
          <img className="projects__item-image" src={require('../../images/humor-me.png')} alt="project" />
        </div>
      </div>
    </div>
  )
}

export default Projects;