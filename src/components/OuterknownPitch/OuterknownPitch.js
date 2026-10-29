// OuterknownPitch.js //
// Forked from SurfriderPitch.js — same structure/styling, content to be filled in
// for a direct pitch to Outerknown.

import './OuterknownPitch.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import pitch from '../../data/outerknown-pitch';
import aboutMe from '../../data/about-me';

gsap.registerPlugin(ScrollTrigger);

// Past-collaboration case studies for "Our History" — add entries here once there's
// real Outerknown-related proof-of-work to show (same shape as SurfriderPitch.js:
// either { cover, metrics, location } or { photos: [...], caption } for an
// auto-rotating carousel).
const pastCollabs = [];

const pillars = [
  { label: "Photographer", image: require('../../images/australia-trip/camera-in-hand.jpg') },
  { label: "Filmmaker", image: require('../../images/australia-trip/wave-crash-silhouette.jpg') },
  { label: "Adventurer", image: require('../../images/australia-trip/rock-climbing.jpg') },
  { label: "Outdoor Professional", image: require('../../images/australia-trip/powder-skiing.jpg') },
  { label: "Writer", image: require('../../images/australia-trip/writer-laptop.jpg') },
]

const tones = [
  { label: "Slow Mornings", image: require('../../images/australia-trip/journaling.jpg') },
  { label: "Surf", image: require('../../images/australia-trip/surf-carve.jpg') },
  { label: "Camp Life", image: require('../../images/australia-trip/campsite-setup.jpg') },
  { label: "Philosophizing", image: require('../../images/australia-trip/portrait-coffee.jpg') },
  { label: "Mindfulness", image: require('../../images/australia-trip/meditation.jpg') },
  { label: "On the Road", image: require('../../images/australia-trip/trailer-truck-forest.jpg') },
  { label: "Sustainability", image: require('../../images/IMG_9538.JPG') },
]

const palette = [
  { label: "Charcoal", hex: "#25272B" },
  { label: "Lagoon", hex: "#95C9BC" },
  { label: "Sky Blue", hex: "#B4CDDD" },
  { label: "Sandbar", hex: "#FEE0BA" },
  { label: "Sunset", hex: "#DB9967" },
  { label: "Coral", hex: "#CB603E" },
]

const asks = [
  {
    title: "Gear & Product",
    description: "Outfit the trip.",
  },
  {
    title: "Paid Sponsorship",
    description: "Compensation for deliverables — posts, video, and usage rights.",
  },
  {
    title: "Trip Cost Support",
    description: "Help cover flights, permits, or lodging to make the adventure happen.",
  },
]

// Add entries here once there's real history/connection to Outerknown to show.
const history = []

const OuterknownPitch = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".outerknown-pitch__hero-content", {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: .3,
      ease: "power2.out",
    })

    gsap.utils.toArray(".outerknown-pitch__section").forEach((section) => {
      gsap.fromTo(section.querySelectorAll(".outerknown-pitch__animate"), {
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
          trigger: section,
          start: "top center",
        }
      })
    })
  }, [])

  return (
    <main className="outerknown-pitch">
      <div className="outerknown-pitch__hero" style={{ backgroundImage: `url(${pitch.heroImage})` }}>
        <div className="outerknown-pitch__hero-overlay" />
        <div className="outerknown-pitch__hero-content">
          <p className="outerknown-pitch__hero-kicker">{pitch.brand} × Jamie Caudill</p>
          <h1 className="outerknown-pitch__hero-title">Be There When the Adventure Becomes the Story</h1>
          <p className="outerknown-pitch__hero-subtitle">
            An authentic {pitch.destination} expedition, {pitch.dates} — let's tell the story together.
          </p>
        </div>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__about">
        <div className="outerknown-pitch__about-container">
          <div className="outerknown-pitch__animate outerknown-pitch__about-photo">
            <img src={require('../../images/australia-trip/paddle-out-smile.jpg')} alt="Jamie Caudill" />
          </div>
          <div className="outerknown-pitch__about-text">
            <p className="outerknown-pitch__kicker">Creator</p>
            <h2 className="outerknown-pitch__title">That's Me</h2>
            <p className="outerknown-pitch__about-bio">{aboutMe}</p>
          </div>
        </div>

        <Swiper
          className="outerknown-pitch__pillars"
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          navigation={true}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
          }}
        >
          {pillars.map((pillar) => (
            <SwiperSlide className="outerknown-pitch__pillar" key={pillar.label}>
              <img src={pillar.image} alt={pillar.label} />
              <span className="outerknown-pitch__pillar-label">{pillar.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__tone">
        <p className="outerknown-pitch__kicker">Brand Palette</p>
        <h2 className="outerknown-pitch__title">Color Palette &amp; Tone</h2>

        <div className="outerknown-pitch__tone-swatches">
          {palette.map((color) => (
            <div className="outerknown-pitch__animate outerknown-pitch__tone-swatch" key={color.label}>
              <span className="outerknown-pitch__tone-swatch-color" style={{ backgroundColor: color.hex }} />
              <span className="outerknown-pitch__tone-swatch-label">{color.label}</span>
            </div>
          ))}
        </div>

        <Swiper
          className="outerknown-pitch__tone-tiles"
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          navigation={true}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
          }}
        >
          {tones.map((tone) => (
            <SwiperSlide className="outerknown-pitch__tone-tile" key={tone.label}>
              <img src={tone.image} alt={tone.label} />
              <span className="outerknown-pitch__tone-tile-label">{tone.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__audience">
        <p className="outerknown-pitch__kicker">Audience</p>
        <h2 className="outerknown-pitch__title">Who's Watching</h2>

        <div className="outerknown-pitch__audience-stats">
          <div className="outerknown-pitch__animate outerknown-pitch__audience-stat">
            <span className="outerknown-pitch__audience-stat-value">{pitch.audience.followers}</span>
            <span className="outerknown-pitch__audience-stat-label">Followers</span>
          </div>
          <div className="outerknown-pitch__animate outerknown-pitch__audience-stat">
            <span className="outerknown-pitch__audience-stat-value">{pitch.audience.platform}</span>
            <span className="outerknown-pitch__audience-stat-label">Primary Platform</span>
          </div>
          <div className="outerknown-pitch__animate outerknown-pitch__audience-stat">
            <span className="outerknown-pitch__audience-stat-value">{pitch.audience.reach}</span>
            <span className="outerknown-pitch__audience-stat-label">Reach</span>
          </div>
        </div>

        <div className="outerknown-pitch__animate outerknown-pitch__audience-proof">
          <img src={require('../../images/instagram-insights.png')} alt="Instagram insights for @jam.caudill, Sep 27 - Oct 27, 2026" />
        </div>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__adventure">
        <div className="outerknown-pitch__adventure-container">
          <div className="outerknown-pitch__adventure-text">
            <p className="outerknown-pitch__kicker">The Plan</p>
            <h2 className="outerknown-pitch__title">First Stop: {pitch.destination}</h2>
            <p className="outerknown-pitch__adventure-subtitle">{pitch.dates} — {pitch.storyAngle}</p>
            {pitch.story.map((paragraph, index) => (
              <p className="outerknown-pitch__adventure-description" key={index}>{paragraph}</p>
            ))}
            <ul className="outerknown-pitch__adventure-list">
              {pitch.contentFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="outerknown-pitch__animate outerknown-pitch__adventure-image">
            <img src={require('../../images/IMG_9539.JPG')} alt="Surfers in the lineup" />
          </div>
        </div>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__partnership">
        <p className="outerknown-pitch__kicker">Our History</p>
        <h2 className="outerknown-pitch__title">Let's Build On What We Started</h2>
        <p className="outerknown-pitch__partnership-text">
          We've already proven what honest, in-the-field storytelling can do together —
          this trip is a chance to go further.
        </p>

        <div className="outerknown-pitch__animate outerknown-pitch__history-video">
          <video src="/videos/outerknown-ok.mp4" poster="/videos/outerknown-ok-poster.jpg" controls loop autoPlay muted playsInline />
        </div>

        {history.length > 0 && (
          <ul className="outerknown-pitch__animate outerknown-pitch__partnership-history">
            {history.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {pastCollabs.map((collab) => (
          <div className="outerknown-pitch__animate outerknown-pitch__case-study" key={collab.title}>
            {collab.photos ? (
              <Swiper
                className="outerknown-pitch__case-study-image outerknown-pitch__case-study-swiper"
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
              >
                {collab.photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <img src={photo} alt={collab.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img className="outerknown-pitch__case-study-image" src={collab.cover} alt={collab.title} />
            )}
            <div className="outerknown-pitch__case-study-info">
              <span className="outerknown-pitch__case-study-label">Past Collaboration</span>
              <h3 className="outerknown-pitch__case-study-title">{collab.title}</h3>
              <p className="outerknown-pitch__case-study-stat">
                {collab.caption || `${collab.metrics[0].value} ${collab.metrics[0].label} · ${collab.location}`}
              </p>
              <div className="outerknown-pitch__case-study-logos">
                {collab.logos?.map((logo) => (
                  <img
                    key={logo.alt}
                    className={logo.invert ? "is-inverted" : ""}
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="outerknown-pitch__animate outerknown-pitch__partnership-partners">
          <span className="outerknown-pitch__partnership-partners-label">Past Collaborations</span>
          <div className="outerknown-pitch__partnership-partners-logos">
            <img className="outerknown-pitch__partnership-partners-logo--wavesWifi" src={require('../../images/Waves-Wifi-Logo-Final.svg').default} alt="Waves & Wifi" />
            <img src={require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp')} alt="Surfrider Foundation" />
            <img src={require('../../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default} alt="Deep Sea Conserve" />
          </div>
        </div>

        <p className="outerknown-pitch__kicker">The Ask</p>
        <p className="outerknown-pitch__partnership-text">
          I need sponsors to help fund the trip with gear and/or money.
        </p>

        <div className="outerknown-pitch__partnership-asks">
          {asks.map((item) => (
            <div className="outerknown-pitch__animate outerknown-pitch__partnership-ask" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="outerknown-pitch__section outerknown-pitch__cta">
        <div className="outerknown-pitch__animate outerknown-pitch__cta-content">
          <p className="outerknown-pitch__kicker">Let's Go</p>
          <h2 className="outerknown-pitch__title">Let's Adventure Together</h2>
          <p className="outerknown-pitch__cta-subtext">Ready to put Outerknown at the heart of this story?</p>
          <div className="outerknown-pitch__cta-links">
            <a className="outerknown-pitch__cta-link" href="mailto:j.caudill7177@gmail.com">Email</a>
            <a className="outerknown-pitch__cta-link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="outerknown-pitch__cta-link" href="https://substack.com/@jamcaudill" target="_blank" rel="noreferrer">Substack</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OuterknownPitch;
