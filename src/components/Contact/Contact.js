// Contact.js //

import './Contact.scss';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".contact__content", {
      y: 30,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="contact" id="contact">
      <div className="contact__content">
        <p className="contact__kicker">Contact</p>
        <h1 className="contact__title">Let's Collaborate</h1>
        <p className="contact__subtext">
          Reach out for collaborations, packages, or just to say hi.
        </p>
        <div className="contact__links">
          <a className="contact__link" href="mailto:j.caudill7177@gmail.com">Email</a>
          <a className="contact__link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="contact__link" href="https://wa.me/19709489217" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
