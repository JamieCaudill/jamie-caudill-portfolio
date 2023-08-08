// ProjectDetails.js //

import './ProjectDetails.css';
import data from '../../data/project-data';

const ProjectDetails = ({project, tech}) => {
  
  const techUsed = tech.map((tech, index) => {
    return <p key={index}>{tech}</p>
  })

  return (
    <div className="project-details">
      <div className="project-details__header">
        <h1>{project.title}</h1>
        <div className="project-details__links">
          {/* links go here */}
        </div>
      </div>
      <div className="project-details__container">
        <div className="project-details__left">
          <div className="project-details__image-container">
            <img className="project-details__image" src={project.gif} alt="project" />
          </div>
          <div className="project-details__tech">
            <h3>Technologies</h3>
            <div className="project-details__tech-used">
              <ul>
                {techUsed}
              </ul>
            </div>
          </div>
        </div>
        <div className="project-details__right">
          <h3 className="project-details__summary-title">Summary</h3>
          <div className="project-details__summary">
            <p className="project-details__summary-text">{project.summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;