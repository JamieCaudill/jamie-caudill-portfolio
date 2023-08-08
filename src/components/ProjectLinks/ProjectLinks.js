// ProjectLinks.js //

import './ProjectLinks.css';

const ProjectLinks = ({project}) => {

  const links = project.links.map((link) => {
    return (
      <a href={link.link} target="_blank" className="project-link">{link.type}</a>
    )
  })

  return (
    <div className="project-links">
      <div className="project-links__container">
       {links}
      </div>
    </div>
  )
}

export default ProjectLinks;