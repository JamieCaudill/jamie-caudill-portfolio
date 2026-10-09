// Portfolio.js //

import './Portfolio.scss';
import portfolioData from '../../data/portfolio-data';
import PortfolioItem from './PortfolioItem';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".portfolio__item", {
      y: 50,
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
        trigger: ".portfolio",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <p className="portfolio__kicker">Portfolio</p>
        <h1 className="portfolio__title">Featured Work</h1>
      </div>

      <div className="portfolio__items">
        {portfolioData.map((item) => (
          <PortfolioItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
