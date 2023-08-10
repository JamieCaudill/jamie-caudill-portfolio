// About.js //

import './About.scss';
import aboutMe from '../../data/about-me';

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__image">
          {/* <img className="about__image-image" src={require('../../images/profile.jpg')} alt="profile" /> */}
        </div>
        <div className="about__text">
          <h1 className="about__text-header">About Me</h1>
          <p className="about__text-paragraph">
            {aboutMe}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;