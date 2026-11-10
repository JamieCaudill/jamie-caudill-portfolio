// SponsorshipPitch.js //
// Generic, brand-agnostic version of the OuterknownPitch/ZealOpticsPitch/
// PatagoniaPitch/SunBumPitch family — same structure and styling, no single
// sponsor named. Lives at /sponsorship; fork it (as those did) once a specific
// brand's content is ready.

import './SponsorshipPitch.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import pitch from '../../data/sponsorship-pitches';
import aboutMe from '../../data/about-me';

gsap.registerPlugin(ScrollTrigger);

// Past-collaboration case studies — add entries here once there's real
// proof-of-work to show (same shape as SurfriderPitch.js: either
// { cover, metrics, location } or { photos: [...], caption } for an
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

// Add entries here once there's real history/connection to a partner to show.
const history = []

const SponsorshipPitch = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".pitch__hero-content", {
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

    gsap.utils.toArray(".pitch__section").forEach((section) => {
      gsap.fromTo(section.querySelectorAll(".pitch__animate"), {
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
    <main className="pitch">
      <div className="pitch__hero" style={{ backgroundImage: `url(${pitch.heroImage})` }}>
        <div className="pitch__hero-overlay" />
        <div className="pitch__hero-content">
          <p className="pitch__hero-kicker">Open For Sponsorship</p>
          <h1 className="pitch__hero-title">Be There When the Adventure Becomes the Story</h1>
          <p className="pitch__hero-subtitle">
            An authentic {pitch.destination} expedition, {pitch.dates} — bring your brand along for the journey.
          </p>
        </div>
      </div>

      <div className="pitch__section pitch__about">
        <div className="pitch__about-container">
          <div className="pitch__animate pitch__about-photo">
            <img src={require('../../images/australia-trip/paddle-out-smile.jpg')} alt="Jamie Caudill" />
          </div>
          <div className="pitch__about-text">
            <p className="pitch__kicker">Creator</p>
            <h2 className="pitch__title">That's Me</h2>
            <p className="pitch__about-bio">{aboutMe}</p>
          </div>
        </div>

        <Swiper
          className="pitch__pillars"
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
            <SwiperSlide className="pitch__pillar" key={pillar.label}>
              <img src={pillar.image} alt={pillar.label} />
              <span className="pitch__pillar-label">{pillar.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pitch__section pitch__tone">
        <p className="pitch__kicker">Brand Palette</p>
        <h2 className="pitch__title">Color Palette &amp; Tone</h2>

        <div className="pitch__tone-swatches">
          {palette.map((color) => (
            <div className="pitch__animate pitch__tone-swatch" key={color.label}>
              <span className="pitch__tone-swatch-color" style={{ backgroundColor: color.hex }} />
              <span className="pitch__tone-swatch-label">{color.label}</span>
            </div>
          ))}
        </div>

        <Swiper
          className="pitch__tone-tiles"
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
            <SwiperSlide className="pitch__tone-tile" key={tone.label}>
              <img src={tone.image} alt={tone.label} />
              <span className="pitch__tone-tile-label">{tone.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pitch__section pitch__audience">
        <p className="pitch__kicker">Audience</p>
        <h2 className="pitch__title">Who's Watching</h2>

        <div className="pitch__audience-stats">
          <div className="pitch__animate pitch__audience-stat">
            <span className="pitch__audience-stat-value">{pitch.audience.followers}</span>
            <span className="pitch__audience-stat-label">Followers</span>
          </div>
          <div className="pitch__animate pitch__audience-stat">
            <span className="pitch__audience-stat-value">{pitch.audience.platform}</span>
            <span className="pitch__audience-stat-label">Primary Platform</span>
          </div>
          <div className="pitch__animate pitch__audience-stat">
            <span className="pitch__audience-stat-value">{pitch.audience.reach}</span>
            <span className="pitch__audience-stat-label">Reach</span>
          </div>
        </div>

        <div className="pitch__animate pitch__audience-proof">
          <img src={require('../../images/instagram-insights.png')} alt="Instagram insights for @jam.caudill, Sep 27 - Oct 27, 2026" />
        </div>
      </div>

      <div className="pitch__section pitch__adventure">
        <div className="pitch__adventure-container">
          <div className="pitch__adventure-text">
            <p className="pitch__kicker">The Mission</p>
            <h2 className="pitch__title">{pitch.destination}</h2>
            <p className="pitch__adventure-subtitle">{pitch.dates} — {pitch.storyAngle}</p>
            {pitch.story.map((paragraph, index) => (
              <p className="pitch__adventure-description" key={index}>{paragraph}</p>
            ))}
            <ul className="pitch__adventure-list">
              {pitch.contentFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="pitch__animate pitch__adventure-image">
            <img src={require('../../images/IMG_9539.JPG')} alt="Surfers in the lineup" />
          </div>
        </div>
      </div>

      <div className="pitch__section pitch__format">
        <p className="pitch__kicker">The Format</p>
        <h2 className="pitch__title">The Throughline</h2>
        <p className="pitch__format-text">
          Every stop on this trip starts with the activity — a surf session, a
          climb, a day in the snow — and follows wherever it leads: time in
          nature, a mindfulness practice, the physical challenge of pushing your
          body, or a closer look at how the people living there relate to wild
          places.
        </p>
        <p className="pitch__format-text">
          I want to tell stories that connect outdoor adventure — surfing,
          climbing, skiing — to nature, mindfulness, health and fitness, and
          sustainability.
        </p>
        <p className="pitch__format-text">
          These aren't staged outdoor ads — they're real days spent chasing
          swell, elevation, and quiet, and everything that comes with slowing
          down enough to actually be in it.
        </p>

        <blockquote className="pitch__animate pitch__format-quote">
          <p>"In every walk with nature one receives far more than he seeks."</p>
          <cite>— John Muir</cite>
        </blockquote>

        <div className="pitch__format-steps">
          <div className="pitch__animate pitch__format-step">
            <h3>Get Outside</h3>
            <p>Surf, climb, hike, or ski — the activity every stop starts with.</p>
          </div>
          <div className="pitch__animate pitch__format-step">
            <h3>Slow Down</h3>
            <p>Mindfulness, recovery, and time to actually notice the place you're in.</p>
          </div>
          <div className="pitch__animate pitch__format-step">
            <h3>Film</h3>
            <p>Document the people, the place, and the process — not just the highlight reel.</p>
          </div>
        </div>
      </div>

      <div className="pitch__section pitch__partnership">
        <p className="pitch__kicker">Track Record</p>
        <h2 className="pitch__title">A Track Record Worth Building On</h2>
        <p className="pitch__partnership-text">
          I've already shown what honest, in-the-field storytelling can do with
          outdoor and conservation-minded partners, and I'm ready to bring that
          same approach to the next one.
        </p>

        {history.length > 0 && (
          <ul className="pitch__animate pitch__partnership-history">
            {history.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {pastCollabs.map((collab) => (
          <div className="pitch__animate pitch__case-study" key={collab.title}>
            {collab.photos ? (
              <Swiper
                className="pitch__case-study-image pitch__case-study-swiper"
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
              <img className="pitch__case-study-image" src={collab.cover} alt={collab.title} />
            )}
            <div className="pitch__case-study-info">
              <span className="pitch__case-study-label">Past Collaboration</span>
              <h3 className="pitch__case-study-title">{collab.title}</h3>
              <p className="pitch__case-study-stat">
                {collab.caption || `${collab.metrics[0].value} ${collab.metrics[0].label} · ${collab.location}`}
              </p>
              <div className="pitch__case-study-logos">
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

        <div className="pitch__animate pitch__partnership-partners">
          <span className="pitch__partnership-partners-label">Past &amp; Current Collaborations</span>
          <div className="pitch__partnership-partners-logos">
            <img className="pitch__partnership-partners-logo--wavesWifi" src={require('../../images/Waves-Wifi-Logo-Final.svg').default} alt="Waves & Wifi" />
            <img src={require('../../images/Outerknown-Logos-01.png')} alt="Outerknown" />
            <img src={require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp')} alt="Surfrider Foundation" />
            <img src={require('../../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default} alt="Deep Sea Conserve" />
          </div>
        </div>

        <p className="pitch__kicker">The Ask</p>
        <p className="pitch__partnership-text is-tight">
          I'm looking for a small number of partners to help bring this documentary
          series to life.
        </p>
        <p className="pitch__partnership-text is-tight">
          In return, I'll create authentic, story-driven content that puts your
          products in the environments they're designed for — from the saltwater and
          surf to long days exploring the outdoors.
        </p>
        <p className="pitch__partnership-text is-tight">
          Partnerships can include production support, gear for the journey,
          dedicated short-form content, product integration, and photography or
          video assets for your own channels.
        </p>
        <p className="pitch__partnership-text">
          Rather than traditional advertising, I want to build partnerships around
          products I genuinely use and stories worth telling.
        </p>

        <div className="pitch__partnership-asks">
          {asks.map((item) => (
            <div className="pitch__animate pitch__partnership-ask" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pitch__section pitch__cta">
        <div className="pitch__animate pitch__cta-content">
          <p className="pitch__kicker">Let's Go</p>
          <h2 className="pitch__title">Let's Adventure Together</h2>
          <p className="pitch__cta-subtext">Ready to put your brand at the heart of this story?</p>
          <div className="pitch__cta-links">
            <a className="pitch__cta-link" href="mailto:j.caudill7177@gmail.com">Email</a>
            <a className="pitch__cta-link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="pitch__cta-link" href="https://substack.com/@jamcaudill" target="_blank" rel="noreferrer">Substack</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SponsorshipPitch;
