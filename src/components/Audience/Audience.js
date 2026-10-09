// Audience.js //

import './Audience.scss';
import audienceData from '../../data/audience-data';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Audience = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".audience__stat, .audience__bar", {
      y: 20,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: .8,
      ease: "power1.out",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".audience",
        start: "top center",
      }
    })
  }, [])

  return (
    <div className="audience">
      <div className="audience__header">
        <p className="audience__kicker">Audience</p>
        <h1 className="audience__title">Who's Watching</h1>
      </div>

      <div className="audience__stats">
        <div className="audience__stat">
          <span className="audience__stat-value">{audienceData.followers}</span>
          <span className="audience__stat-label">Followers</span>
        </div>
        {audienceData.gender.map((row) => (
          <div className="audience__stat" key={row.label}>
            <span className="audience__stat-value">{row.value}%</span>
            <span className="audience__stat-label">{row.label}</span>
          </div>
        ))}
      </div>

      <div className="audience__charts">
        <div className="audience__chart">
          <h2 className="audience__chart-title">Age</h2>
          {audienceData.age.map((row) => (
            <div className="audience__bar" key={row.label}>
              <span className="audience__bar-label">{row.label}</span>
              <div className="audience__bar-track">
                <div className="audience__bar-fill" style={{ width: `${row.value}%` }} />
              </div>
              <span className="audience__bar-value">{row.value}%</span>
            </div>
          ))}
        </div>

        <div className="audience__chart">
          <h2 className="audience__chart-title">Top Locations</h2>
          {audienceData.locations.map((row) => (
            <div className="audience__bar" key={row.label}>
              <span className="audience__bar-label">{row.label}</span>
              <div className="audience__bar-track">
                <div className="audience__bar-fill" style={{ width: `${row.value}%` }} />
              </div>
              <span className="audience__bar-value">{row.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Audience;
