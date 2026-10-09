// About.js //

import './About.scss';
import aboutMe from '../../data/about-me';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".about__image", {
      y: 50,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".intro",
        start: "bottom center",
      }
    })

    gsap.fromTo(".about__text", {
      opacity: 0,
    },
    {
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".intro",
        start: "bottom center",
      }
    })
  }, [])

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__image">
          <img className="about__image-image" src={require('../../images/portrait-climbing.jpg')} alt="Jamie Caudill" />
        </div>
        <div className="about__text">
          <p className="about__text-kicker">About</p>
          <h1 className="about__text-header">A Collector of Stories</h1>
          <p className="about__text-paragraph">
            {aboutMe}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
