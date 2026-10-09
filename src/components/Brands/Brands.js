// Brands.js //

import './Brands.scss';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".brands__content", {
      y: 30,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".brands",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="brands">
      <div className="brands__content">
        <p className="brands__kicker">Brands</p>
        <h1 className="brands__title">Built to Last</h1>
        <p className="brands__text">
          I partner with outdoor gear brands that care about sustainability, durability, and usability —
          creating authentic content from the field, not a studio.
        </p>
        <div className="brands__current">
          <span className="brands__current-label">Currently Gear-Sponsored By</span>
          <img
            className="brands__current-logo"
            src={require('../../images/Outerknown-Logo-1.png')}
            alt="Outerknown"
          />
        </div>
        <a className="brands__cta" href="#contact">Partner With Me</a>
      </div>
    </div>
  )
}

export default Brands;
