// SurfriderPitch.js //
// Duplicated from SponsorshipPitch.js as a template — tailored for a direct pitch to Surfrider Foundation.

import './SurfriderPitch.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import pitch from '../../data/surfrider-pitch';
import portfolioData from '../../data/portfolio-data';
import aboutMe from '../../data/about-me';

gsap.registerPlugin(ScrollTrigger);

const obPhotoshootPhotos = [
  require('../../images/surfrider-photoshoot/DSC09291.jpg'),
  require('../../images/surfrider-photoshoot/DSC09106.jpg'),
  require('../../images/surfrider-photoshoot/DSC09118.jpg'),
  require('../../images/surfrider-photoshoot/DSC09145.jpg'),
  require('../../images/surfrider-photoshoot/DSC09161.jpg'),
  require('../../images/surfrider-photoshoot/DSC09209.jpg'),
  require('../../images/surfrider-photoshoot/DSC09306.jpg'),
]

const pastCollabs = [
  portfolioData.find((item) => item.title.includes("DefendTheDeep")),
  {
    title: "Outdoor Alliance × Surfrider — Ocean Beach",
    photos: obPhotoshootPhotos,
    caption: "Coastal Resilience Master Plan community walk, 2025 · Ocean Beach, San Diego",
    logos: [
      {
        src: require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp'),
        alt: "Surfrider Foundation",
        invert: true,
      },
    ],
  },
].filter(Boolean);

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
    title: "Financial Support",
    description: "This is a passion project, not a payday — any contribution goes straight toward trip costs, not profit.",
  },
  {
    title: "Contacts",
    description: "Introductions to people within the communities — local wilderness defenders who'd make strong subjects for the series.",
  },
]

const history = [
  "Member & volunteer, Surfrider San Diego",
  "Photographed the Outdoor Alliance × Surfrider collaboration in Ocean Beach, 2025",
  "Organized a Surfrider × Defend the Deep paddle out in Popoyo, Nicaragua — a community gathering, a screening of \"Defend the Deep,\" the Jason Momoa–narrated documentary, and empanadas from a local restaurant",
]

const SurfriderPitch = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".surfrider-pitch__hero-content", {
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

    gsap.utils.toArray(".surfrider-pitch__section").forEach((section) => {
      gsap.fromTo(section.querySelectorAll(".surfrider-pitch__animate"), {
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
    <main className="surfrider-pitch">
      <div className="surfrider-pitch__hero" style={{ backgroundImage: `url(${pitch.heroImage})` }}>
        <div className="surfrider-pitch__hero-overlay" />
        <div className="surfrider-pitch__hero-content">
          <p className="surfrider-pitch__hero-kicker">{pitch.brand} × Jamie Caudill</p>
          <p className="surfrider-pitch__hero-project">The Defenders</p>
          <h1 className="surfrider-pitch__hero-title">Be There When Grassroots Conservation Becomes the Story</h1>
          <p className="surfrider-pitch__hero-subtitle">
            Flying into Brisbane and working down the Australian coast by van, {pitch.dates} — let's tell the story of the people fighting for our ocean.
          </p>
        </div>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__about">
        <div className="surfrider-pitch__about-container">
          <div className="surfrider-pitch__animate surfrider-pitch__about-photo">
            <img src={require('../../images/australia-trip/paddle-out-smile.jpg')} alt="Jamie Caudill" />
          </div>
          <div className="surfrider-pitch__about-text">
            <p className="surfrider-pitch__kicker">Creator</p>
            <h2 className="surfrider-pitch__title">That's Me</h2>
            <p className="surfrider-pitch__about-bio">{aboutMe}</p>
          </div>
        </div>

        <Swiper
          className="surfrider-pitch__pillars"
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
            <SwiperSlide className="surfrider-pitch__pillar" key={pillar.label}>
              <img src={pillar.image} alt={pillar.label} />
              <span className="surfrider-pitch__pillar-label">{pillar.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__tone">
        <p className="surfrider-pitch__kicker">Surfrider Palette</p>
        <h2 className="surfrider-pitch__title">Color Palette &amp; Tone</h2>

        <div className="surfrider-pitch__tone-swatches">
          {palette.map((color) => (
            <div className="surfrider-pitch__animate surfrider-pitch__tone-swatch" key={color.label}>
              <span className="surfrider-pitch__tone-swatch-color" style={{ backgroundColor: color.hex }} />
              <span className="surfrider-pitch__tone-swatch-label">{color.label}</span>
            </div>
          ))}
        </div>

        <Swiper
          className="surfrider-pitch__tone-tiles"
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
            <SwiperSlide className="surfrider-pitch__tone-tile" key={tone.label}>
              <img src={tone.image} alt={tone.label} />
              <span className="surfrider-pitch__tone-tile-label">{tone.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__audience">
        <p className="surfrider-pitch__kicker">Audience</p>
        <h2 className="surfrider-pitch__title">Who's Watching</h2>

        <div className="surfrider-pitch__audience-stats">
          <div className="surfrider-pitch__animate surfrider-pitch__audience-stat">
            <span className="surfrider-pitch__audience-stat-value">{pitch.audience.followers}</span>
            <span className="surfrider-pitch__audience-stat-label">Followers</span>
          </div>
          <div className="surfrider-pitch__animate surfrider-pitch__audience-stat">
            <span className="surfrider-pitch__audience-stat-value">{pitch.audience.platform}</span>
            <span className="surfrider-pitch__audience-stat-label">Primary Platform</span>
          </div>
          <div className="surfrider-pitch__animate surfrider-pitch__audience-stat">
            <span className="surfrider-pitch__audience-stat-value">{pitch.audience.reach}</span>
            <span className="surfrider-pitch__audience-stat-label">Reach</span>
          </div>
        </div>

        <div className="surfrider-pitch__animate surfrider-pitch__audience-proof">
          <img src={require('../../images/instagram-insights.png')} alt="Instagram insights for @jam.caudill, Sep 27 - Oct 27, 2026" />
        </div>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__adventure">
        <div className="surfrider-pitch__adventure-container">
          <div className="surfrider-pitch__adventure-text">
            <p className="surfrider-pitch__kicker">The Mission</p>
            <h2 className="surfrider-pitch__title">{pitch.destination}</h2>
            <p className="surfrider-pitch__adventure-subtitle">{pitch.dates} — {pitch.storyAngle}</p>
            {pitch.story.map((paragraph, index) => {
              const marker = '"Maroon Belles"';
              const markerIndex = paragraph.indexOf(marker);
              if (markerIndex === -1) {
                return <p className="surfrider-pitch__adventure-description" key={index}>{paragraph}</p>;
              }
              return (
                <p className="surfrider-pitch__adventure-description" key={index}>
                  {paragraph.slice(0, markerIndex)}
                  <a href={pitch.maroonBellesSourceUrl} target="_blank" rel="noreferrer">{marker}</a>
                  {paragraph.slice(markerIndex + marker.length)}
                </p>
              );
            })}
            <ul className="surfrider-pitch__adventure-list">
              {pitch.contentFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="surfrider-pitch__animate surfrider-pitch__adventure-image">
            <img src={require('../../images/IMG_9539.JPG')} alt="Surfers in the lineup, Nicaragua" />
          </div>
        </div>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__partnership">
        <p className="surfrider-pitch__kicker">Our History</p>
        <h2 className="surfrider-pitch__title">Let's Build On What We Started</h2>
        <p className="surfrider-pitch__partnership-text">
          We've already proven what honest, in-the-water storytelling can do together —
          this trip is a chance to go further.
        </p>

        <ul className="surfrider-pitch__animate surfrider-pitch__partnership-history">
          {history.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {pastCollabs.map((collab) => (
          <div className="surfrider-pitch__animate surfrider-pitch__case-study" key={collab.title}>
            {collab.photos ? (
              <Swiper
                className="surfrider-pitch__case-study-image surfrider-pitch__case-study-swiper"
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
              <img className="surfrider-pitch__case-study-image" src={collab.cover} alt={collab.title} />
            )}
            <div className="surfrider-pitch__case-study-info">
              <span className="surfrider-pitch__case-study-label">Past Collaboration</span>
              <h3 className="surfrider-pitch__case-study-title">{collab.title}</h3>
              <p className="surfrider-pitch__case-study-stat">
                {collab.caption || `${collab.metrics[0].value} ${collab.metrics[0].label} · ${collab.location}`}
              </p>
              <div className="surfrider-pitch__case-study-logos">
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

        <div className="surfrider-pitch__animate surfrider-pitch__partnership-partners">
          <span className="surfrider-pitch__partnership-partners-label">Past &amp; Current Collaborations</span>
          <div className="surfrider-pitch__partnership-partners-logos">
            <img src={require('../../images/Outerknown-Logos-01.png')} alt="Outerknown" />
            <img src={require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp')} alt="Surfrider Foundation" />
            <img src={require('../../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default} alt="Deep Sea Conserve" />
          </div>
        </div>

        <p className="surfrider-pitch__kicker">The Ask</p>
        <p className="surfrider-pitch__partnership-text">
          I need sponsors to help fund the trip with gear and/or money.
        </p>

        <div className="surfrider-pitch__partnership-asks">
          {asks.map((item) => (
            <div className="surfrider-pitch__animate surfrider-pitch__partnership-ask" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="surfrider-pitch__section surfrider-pitch__cta">
        <div className="surfrider-pitch__animate surfrider-pitch__cta-content">
          <p className="surfrider-pitch__kicker">Let's Go</p>
          <h2 className="surfrider-pitch__title">Let's Protect the Coast Together</h2>
          <p className="surfrider-pitch__cta-subtext">Ready to put Surfrider at the heart of this story?</p>
          <div className="surfrider-pitch__cta-links">
            <a className="surfrider-pitch__cta-link" href="mailto:j.caudill7177@gmail.com">Email</a>
            <a className="surfrider-pitch__cta-link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="surfrider-pitch__cta-link" href="https://wa.me/19709489217" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SurfriderPitch;
