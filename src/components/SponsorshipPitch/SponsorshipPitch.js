// SponsorshipPitch.js //

import './SponsorshipPitch.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import sponsorshipPitches from '../../data/sponsorship-pitches';
import portfolioData from '../../data/portfolio-data';
import aboutMe from '../../data/about-me';

gsap.registerPlugin(ScrollTrigger);

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
  { label: "Sandbar", hex: "#FEE0BA" },
  { label: "Amber", hex: "#F3C28A" },
  { label: "Lagoon", hex: "#95C9BC" },
  { label: "Sunset", hex: "#DB9967" },
  { label: "Driftwood", hex: "#A77A5D" },
  { label: "Coral", hex: "#CB603E" },
]

const deliverables = [
  {
    title: "Product Placement & Reviews",
    description: "Gear woven naturally into the trip's content — a real field test, not a staged ad.",
  },
  {
    title: "Documentation Content",
    description: "Behind-the-scenes process and raw footage, cut for every platform.",
  },
  {
    title: "Custom Collaboration",
    description: "Bigger campaign, more deliverables, or something specific in mind? Let's build it around your goals.",
  },
]

const asks = [
  {
    title: "Gear & Product",
    description: "Outfit the trip — product provided in exchange for featured content.",
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

const SponsorshipPitch = () => {

  const { slug } = useParams();
  const pitch = sponsorshipPitches.find((entry) => entry.slug === slug);

  useLayoutEffect(() => {
    if (!pitch) return;

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
  }, [pitch])

  if (!pitch) {
    return (
      <div className="pitch pitch--not-found">
        <p>Pitch not found.</p>
      </div>
    )
  }

  return (
    <main className="pitch">
      <div className="pitch__hero" style={{ backgroundImage: `url(${pitch.heroImage})` }}>
        <div className="pitch__hero-overlay" />
        <div className="pitch__hero-content">
          <p className="pitch__hero-kicker">[BRAND] × Jamie Caudill</p>
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
        <p className="pitch__kicker">Vintage Surf</p>
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
            <p className="pitch__kicker">The Adventure</p>
            <h2 className="pitch__title">{pitch.destination}</h2>
            <p className="pitch__adventure-subtitle">{pitch.dates} — {pitch.storyAngle}</p>
            <p className="pitch__adventure-description">{pitch.story}</p>
            <ul className="pitch__adventure-list">
              {pitch.contentFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="pitch__animate pitch__adventure-poster">
            <img src={require('../../images/australia-trip/vintage-surf-poster-coral.png')} alt="Jamie's Vintage Surf Road Trip poster" />
          </div>
        </div>
      </div>

      <div className="pitch__section pitch__numbers">
        <p className="pitch__kicker">Proof of Work</p>
        <h2 className="pitch__title">Content in Numbers</h2>

        <div className="pitch__numbers-grid">
          {portfolioData.map((item) => (
            <div className="pitch__animate pitch__numbers-tile" key={item.id}>
              <img src={item.cover} alt={item.title} />
              <div className="pitch__numbers-tile-info">
                <span className="pitch__numbers-tile-title">{item.title}</span>
                <span className="pitch__numbers-tile-value">{item.metrics[0].value} {item.metrics[0].label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pitch__section pitch__deliverables">
        <p className="pitch__kicker">The Collaboration</p>
        <h2 className="pitch__title">What's Inside for You</h2>

        <div className="pitch__deliverables-grid">
          {deliverables.map((item) => (
            <div className="pitch__animate pitch__deliverables-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pitch__section pitch__partnership">
        <p className="pitch__kicker">Partnership</p>
        <h2 className="pitch__title">Let's Build Something Real</h2>
        <p className="pitch__partnership-text">
          I partner with outdoor gear brands that care about sustainability, durability, and usability —
          creating authentic content from the field, not a studio.
        </p>

        <div className="pitch__animate pitch__partnership-partners">
          <span className="pitch__partnership-partners-label">Past &amp; Current Partners</span>
          <div className="pitch__partnership-partners-logos">
            <img src={require('../../images/Outerknown-Logos-01.png')} alt="Outerknown" />
            <img src={require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp')} alt="Surfrider Foundation" />
            <img src={require('../../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default} alt="Deep Sea Conserve" />
          </div>
        </div>

        <div className="pitch__partnership-asks">
          {asks.map((item) => (
            <div className="pitch__animate pitch__partnership-ask" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="pitch__partnership-fallback">Or let's customize something that works for both of us.</p>
      </div>

      <div className="pitch__section pitch__cta">
        <div className="pitch__animate pitch__cta-sticker">
          <img src={require('../../images/australia-trip/vintage-surf-poster-cream.png')} alt="" />
        </div>
        <div className="pitch__animate pitch__cta-content">
          <p className="pitch__kicker">Let's Go</p>
          <h2 className="pitch__title">Let's Adventure Together</h2>
          <p className="pitch__cta-subtext">Ready to put your brand at the heart of this story?</p>
          <div className="pitch__cta-links">
            <a className="pitch__cta-link" href="mailto:j.caudill7177@gmail.com">Email</a>
            <a className="pitch__cta-link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="pitch__cta-link" href="https://wa.me/19709489217" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SponsorshipPitch;
