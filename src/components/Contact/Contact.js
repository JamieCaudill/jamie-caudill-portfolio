// Contact.js //

import './Contact.scss';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".contact", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="contact">
      <h1 className="contact__text-header">Contact Me</h1>
      <div className="contact__container">
        <div className="contact__text">
          <p className="contact__text-paragraph">
            Send me a ping if you'd like to chat! I'm always open to new opportunities and collaborations.
          </p>
        </div>
        <div className="contact__links">
          <a href="mailto:jamie@mybalto.com" target="_blank" rel="noopener noreferrer">
            <img className="contact__links-image" src={require('../../images/gmail.png')} alt="email" />
          </a>
          <a href="https://www.linkedin.com/in/jamie-caudill/" target="_blank" rel="noopener noreferrer">
            <img className="contact__links-image" src={require('../../images/linkedin.png')} alt="linkedin" />
          </a>
          <a href="https://github.com/JamieCaudill" target="_blank" rel="noopener noreferrer">
            <img className="contact__links-image" src={require('../../images/github.png')} alt="github" />
          </a>
          <a href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noopener noreferrer">
            <img className="contact__links-image" src={require('../../images/instagram.png')} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;