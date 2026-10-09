// PortfolioItem.js //

import { useEffect, useState } from 'react';

const PortfolioItem = ({ item }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % item.stills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [item.stills.length]);

  return (
    <div className="portfolio__item">
      <a
        className="portfolio__item-cover"
        href={item.url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={item.cover} alt={item.title} />
      </a>

      <div className="portfolio__item-info">
        <p className="portfolio__item-location">{item.location}</p>
        <h2 className="portfolio__item-title">{item.title}</h2>

        <div className="portfolio__item-metrics">
          {item.metrics.map((metric) => (
            <div className="portfolio__item-metric" key={metric.label}>
              <span className="portfolio__item-metric-value">{metric.value}</span>
              <span className="portfolio__item-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        <a
          className="portfolio__item-link"
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          Watch on Instagram
        </a>

        <div className="portfolio__item-carousel">
          {item.stills.map((still, index) => (
            <img
              key={index}
              src={still}
              alt=""
              className={index === activeIndex ? "is-active" : ""}
            />
          ))}
          <div className="portfolio__item-carousel-dots">
            {item.stills.map((_, index) => (
              <button
                key={index}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show still ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;
