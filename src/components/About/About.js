// About.js //

import './About.scss';
import aboutMe from '../../data/about-me';

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__image">
          <img className="about__image-image" src={require('../../images/portrait.jpeg')} alt="headshot" />
          <h2>Jamie Caudill</h2>
          <h3>Software Developer</h3>
        </div>
        <div className="about__text">
          <h1 className="about__text-header">About Me</h1>
          <p className="about__text-paragraph">
            {aboutMe}
          </p>
        </div>
      </div>
      <div className="about__skills">
        <div className="about__skills-container">
          <div className="about__skills-image-container">
            <img className="about__skills-image" src={require('../../images/html.png')} alt="html" />
            <p className="about__skills-image-text">HTML</p>
          </div>
          <div className="about__skills-image-container">  
            <img className="about__skills-image" src={require('../../images/css.png')} alt="css" />
            <p className="about__skills-image-text">CSS</p>
          </div>
          <div className="about__skills-image-container">
            <img className="about__skills-image" src={require('../../images/js.png')} alt="javascript" />
            <p className="about__skills-image-text">JavaScript</p>
          </div>
          <div className="about__skills-image-container">  
            <img className="about__skills-image" src={require('../../images/react.png')} alt="react" />
            <p className="about__skills-image-text">React</p>
          </div>
          <div className="about__skills-image-container">
            <img className="about__skills-image" src={require('../../images/git.png')} alt="git" />
            <p className="about__skills-image-text">Git</p>
          </div>
          <div className="about__skills-image-container">
            <img className="about__skills-image" src={require('../../images/sass.png')} alt="sass" />
            <p className="about__skills-image-text">Sass</p>
          </div>
          <div className="about__skills-image-container">
            <img className="about__skills-image" src={require('../../images/express.png')} alt="express" />
            <p className="about__skills-image-text">Express</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;