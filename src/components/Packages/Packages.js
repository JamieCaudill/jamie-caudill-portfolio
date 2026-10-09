// Packages.js //

import './Packages.scss';
import packagesData from '../../data/packages-data';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".packages__card", {
      y: 30,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".packages",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="packages">
      <div className="packages__header">
        <p className="packages__kicker">Packages</p>
        <h1 className="packages__title">Stay &amp; Create</h1>
        <p className="packages__subtext">Content in exchange for a stay — pick the tier that fits.</p>
      </div>

      <div className="packages__cards">
        {packagesData.map((tier) => (
          <div className={`packages__card${tier.featured ? " is-featured" : ""}`} key={tier.id}>
            {tier.featured && <span className="packages__card-tag">Full Package</span>}
            <h2 className="packages__card-name">{tier.name}</h2>
            <div className="packages__card-nights">
              <span className="packages__card-nights-value">{tier.nights}</span>
              <span className="packages__card-nights-label">Nights Stay</span>
            </div>
            {tier.custom ? (
              <p className="packages__card-description">{tier.description}</p>
            ) : (
              <ul className="packages__card-list">
                {tier.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <a className="packages__cta" href="#contact">Get in Touch</a>
    </div>
  )
}

export default Packages;
