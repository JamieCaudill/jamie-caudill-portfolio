// PortfolioItem.js //

import { useRef } from 'react';

const PortfolioItem = ({ item }) => {

  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  };

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
        <div className="portfolio__item-title-row">
          <h2 className="portfolio__item-title">{item.title}</h2>
          {item.titleLogo && (
            <img
              className={`portfolio__item-title-logo ${item.titleLogo.invert ? "is-inverted" : ""}`}
              src={item.titleLogo.src}
              alt={item.titleLogo.alt}
            />
          )}
        </div>

        <div className="portfolio__item-metrics">
          {item.metrics.map((metric) => (
            <div className="portfolio__item-metric" key={metric.label}>
              <span className="portfolio__item-metric-value">{metric.value}</span>
              <span className="portfolio__item-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        {item.logos && item.logos.length > 0 && (
          <div className="portfolio__item-partners">
            <span className="portfolio__item-partners-label">In Partnership With</span>
            <div className="portfolio__item-partners-logos">
              {item.logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.invert ? "is-inverted" : ""}
                />
              ))}
            </div>
          </div>
        )}

        <a
          className="portfolio__item-link"
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          Watch on Instagram
        </a>

        <div className="portfolio__item-stills">
          {item.stills.length > 3 && (
            <button
              className="portfolio__item-stills-arrow portfolio__item-stills-arrow--left"
              onClick={() => scroll(-1)}
              aria-label="Show previous stills"
            >
              ‹
            </button>
          )}

          <div className="portfolio__item-stills-track" ref={trackRef}>
            {item.stills.map((still, index) => (
              <div className="portfolio__item-still" key={index}>
                <img src={still} alt="" />
              </div>
            ))}
          </div>

          {item.stills.length > 3 && (
            <button
              className="portfolio__item-stills-arrow portfolio__item-stills-arrow--right"
              onClick={() => scroll(1)}
              aria-label="Show more stills"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;
