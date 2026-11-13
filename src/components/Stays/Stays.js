// Stays.js //

import './Stays.scss';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  {
    id: "1",
    name: "Story",
    nights: "3–4",
    deliverables: [
      "30 professional photos",
      "6 clips for marketing & stories",
      "1 short-form reel (15–30 sec)",
    ],
  },
  {
    id: "2",
    name: "Signature",
    nights: "5+",
    deliverables: [
      "50–100 professional photos",
      "10 professional clips for whitelabel marketing",
      "1 personalized reel documenting the full experience",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Custom",
    nights: "Flexible",
    custom: true,
    description: "Bigger stay, more content, or something specific in mind? Let's build a package around your space and goals.",
  },
];

const Stays = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".stays__card", {
      y: 30,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".stays",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="stays">
      <div className="stays__header">
        <p className="stays__kicker">Stays</p>
        <h1 className="stays__title">A Few Nights, Captured</h1>
        <p className="stays__subtext">Content in exchange for a stay — here's what a short visit looks like.</p>
      </div>

      <div className="stays__cards">
        {stays.map((tier) => (
          <div className={`stays__card${tier.featured ? " is-featured" : ""}`} key={tier.id}>
            {tier.featured && <span className="stays__card-tag">Full Package</span>}
            <h2 className="stays__card-name">{tier.name}</h2>
            <div className="stays__card-nights">
              <span className="stays__card-nights-value">{tier.nights}</span>
              <span className="stays__card-nights-label">Nights Stay</span>
            </div>
            {tier.custom ? (
              <p className="stays__card-description">{tier.description}</p>
            ) : (
              <ul className="stays__card-list">
                {tier.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <a className="stays__cta" href="/#contact">Get in Touch</a>
    </div>
  )
}

export default Stays;
