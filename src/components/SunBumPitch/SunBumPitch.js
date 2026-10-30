// SunBumPitch.js //
// Forked from PatagoniaPitch.js — same structure/styling, content tailored
// for a direct pitch to Sun Bum.

import './SunBumPitch.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import pitch from '../../data/sun-bum-pitch';
import aboutMe from '../../data/about-me';

gsap.registerPlugin(ScrollTrigger);

// Past-collaboration case studies — add entries here once there's real
// Sun Bum-related proof-of-work to show (same shape as SurfriderPitch.js:
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
    description: "Stock the trip with reef-safe, Act 104-compliant sunscreen — on camera and in the kit.",
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

// Add entries here once there's real history/connection to Sun Bum to show.
const history = []

const SunBumPitch = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".sun-bum-pitch__hero-content", {
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

    gsap.utils.toArray(".sun-bum-pitch__section").forEach((section) => {
      gsap.fromTo(section.querySelectorAll(".sun-bum-pitch__animate"), {
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
    <main className="sun-bum-pitch">
      <div className="sun-bum-pitch__hero" style={{ backgroundImage: `url(${pitch.heroImage})` }}>
        <div className="sun-bum-pitch__hero-overlay" />
        <div className="sun-bum-pitch__hero-content">
          <p className="sun-bum-pitch__hero-kicker">{pitch.brand} × Jamie Caudill</p>
          <p className="sun-bum-pitch__hero-project">{pitch.projectName}</p>
          <h1 className="sun-bum-pitch__hero-title">Be There When the Adventure Becomes the Story</h1>
          <p className="sun-bum-pitch__hero-subtitle">
            Flying into Brisbane and working down the Australian coast by van, {pitch.dates} — let's tell the story of the people fighting to protect it.
          </p>
        </div>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__about">
        <div className="sun-bum-pitch__about-container">
          <div className="sun-bum-pitch__animate sun-bum-pitch__about-photo">
            <img src={require('../../images/australia-trip/paddle-out-smile.jpg')} alt="Jamie Caudill" />
          </div>
          <div className="sun-bum-pitch__about-text">
            <p className="sun-bum-pitch__kicker">Creator</p>
            <h2 className="sun-bum-pitch__title">That's Me</h2>
            <p className="sun-bum-pitch__about-bio">{aboutMe}</p>
          </div>
        </div>

        <Swiper
          className="sun-bum-pitch__pillars"
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
            <SwiperSlide className="sun-bum-pitch__pillar" key={pillar.label}>
              <img src={pillar.image} alt={pillar.label} />
              <span className="sun-bum-pitch__pillar-label">{pillar.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__tone">
        <p className="sun-bum-pitch__kicker">Brand Palette</p>
        <h2 className="sun-bum-pitch__title">Color Palette &amp; Tone</h2>

        <div className="sun-bum-pitch__tone-swatches">
          {palette.map((color) => (
            <div className="sun-bum-pitch__animate sun-bum-pitch__tone-swatch" key={color.label}>
              <span className="sun-bum-pitch__tone-swatch-color" style={{ backgroundColor: color.hex }} />
              <span className="sun-bum-pitch__tone-swatch-label">{color.label}</span>
            </div>
          ))}
        </div>

        <Swiper
          className="sun-bum-pitch__tone-tiles"
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
            <SwiperSlide className="sun-bum-pitch__tone-tile" key={tone.label}>
              <img src={tone.image} alt={tone.label} />
              <span className="sun-bum-pitch__tone-tile-label">{tone.label}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__audience">
        <p className="sun-bum-pitch__kicker">Audience</p>
        <h2 className="sun-bum-pitch__title">Who's Watching</h2>

        <div className="sun-bum-pitch__audience-stats">
          <div className="sun-bum-pitch__animate sun-bum-pitch__audience-stat">
            <span className="sun-bum-pitch__audience-stat-value">{pitch.audience.followers}</span>
            <span className="sun-bum-pitch__audience-stat-label">Followers</span>
          </div>
          <div className="sun-bum-pitch__animate sun-bum-pitch__audience-stat">
            <span className="sun-bum-pitch__audience-stat-value">{pitch.audience.platform}</span>
            <span className="sun-bum-pitch__audience-stat-label">Primary Platform</span>
          </div>
          <div className="sun-bum-pitch__animate sun-bum-pitch__audience-stat">
            <span className="sun-bum-pitch__audience-stat-value">{pitch.audience.reach}</span>
            <span className="sun-bum-pitch__audience-stat-label">Reach</span>
          </div>
        </div>

        <div className="sun-bum-pitch__animate sun-bum-pitch__audience-proof">
          <img src={require('../../images/instagram-insights.png')} alt="Instagram insights for @jam.caudill, Sep 27 - Oct 27, 2026" />
        </div>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__adventure">
        <div className="sun-bum-pitch__adventure-container">
          <div className="sun-bum-pitch__adventure-text">
            <p className="sun-bum-pitch__kicker">The Mission</p>
            <h2 className="sun-bum-pitch__title">{pitch.destination}</h2>
            <p className="sun-bum-pitch__adventure-subtitle">{pitch.dates} — {pitch.storyAngle}</p>
            {pitch.story.map((paragraph, index) => {
              const marker = '"Maroon Belles"';
              const markerIndex = paragraph.indexOf(marker);
              if (markerIndex === -1) {
                return <p className="sun-bum-pitch__adventure-description" key={index}>{paragraph}</p>;
              }
              return (
                <p className="sun-bum-pitch__adventure-description" key={index}>
                  {paragraph.slice(0, markerIndex)}
                  <a href={pitch.maroonBellesSourceUrl} target="_blank" rel="noreferrer">{marker}</a>
                  {paragraph.slice(markerIndex + marker.length)}
                </p>
              );
            })}
            <ul className="sun-bum-pitch__adventure-list">
              {pitch.contentFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
          <div className="sun-bum-pitch__animate sun-bum-pitch__adventure-image">
            <img src={require('../../images/IMG_9539.JPG')} alt="Surfers in the lineup" />
          </div>
        </div>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__format">
        <p className="sun-bum-pitch__kicker">The Format</p>
        <h2 className="sun-bum-pitch__title">Where Activity Meets Advocacy</h2>
        <p className="sun-bum-pitch__format-text">
          Each country breaks down into 3 to 4 partner organizations — nonprofits,
          businesses, cooperatives, and grassroots groups fighting to protect
          nature, give back to the earth, educate their communities, or push for
          activism and change. For each one, I volunteer with them, film their
          work, and spend a day surfing, climbing, hiking, or doing whatever
          activity first connected them to the place they're fighting for.
        </p>
        <p className="sun-bum-pitch__format-text">
          Most people in this space didn't start out as activists — they started
          as surfers, climbers, skiers. The outdoors is what pulled them in before
          the advocacy did. This series draws that same line, episode by episode:
          from the activity to the activism.
        </p>
        <p className="sun-bum-pitch__format-text">
          These are the people who go under the radar — quietly fighting for the
          wilderness with no one watching. I want to bring their stories to life,
          flip the exhausted, doom-and-gloom narrative that so much sustainability
          messaging leans on, and inspire people to get active in their own
          communities.
        </p>

        <blockquote className="sun-bum-pitch__animate sun-bum-pitch__format-quote">
          <p>"Even the smallest person can change the course of the future."</p>
          <cite>— Galadriel, <em>The Lord of the Rings: The Fellowship of the Ring</em></cite>
        </blockquote>

        <div className="sun-bum-pitch__format-steps">
          <div className="sun-bum-pitch__animate sun-bum-pitch__format-step">
            <h3>Volunteer</h3>
            <p>Hands-on work with each organization, on their terms.</p>
          </div>
          <div className="sun-bum-pitch__animate sun-bum-pitch__format-step">
            <h3>Film</h3>
            <p>Document the people and the work — interviews, b-roll, the full story.</p>
          </div>
          <div className="sun-bum-pitch__animate sun-bum-pitch__format-step">
            <h3>Get Outside</h3>
            <p>Surf, climb, hike, or ski alongside them — the activity that started it all.</p>
          </div>
        </div>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__partnership">
        <p className="sun-bum-pitch__kicker">Track Record</p>
        <h2 className="sun-bum-pitch__title">Built With Others, Ready To Build With You</h2>
        <p className="sun-bum-pitch__partnership-text">
          This would be a first collaboration with Sun Bum — but not a first
          rodeo. I've already shown what honest, in-the-field storytelling can do
          with other outdoor and conservation-minded partners, and I'm ready to
          bring that same approach here.
        </p>

        {history.length > 0 && (
          <ul className="sun-bum-pitch__animate sun-bum-pitch__partnership-history">
            {history.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {pastCollabs.map((collab) => (
          <div className="sun-bum-pitch__animate sun-bum-pitch__case-study" key={collab.title}>
            {collab.photos ? (
              <Swiper
                className="sun-bum-pitch__case-study-image sun-bum-pitch__case-study-swiper"
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
              <img className="sun-bum-pitch__case-study-image" src={collab.cover} alt={collab.title} />
            )}
            <div className="sun-bum-pitch__case-study-info">
              <span className="sun-bum-pitch__case-study-label">Past Collaboration</span>
              <h3 className="sun-bum-pitch__case-study-title">{collab.title}</h3>
              <p className="sun-bum-pitch__case-study-stat">
                {collab.caption || `${collab.metrics[0].value} ${collab.metrics[0].label} · ${collab.location}`}
              </p>
              <div className="sun-bum-pitch__case-study-logos">
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

        <div className="sun-bum-pitch__animate sun-bum-pitch__partnership-partners">
          <span className="sun-bum-pitch__partnership-partners-label">Past &amp; Current Collaborations</span>
          <div className="sun-bum-pitch__partnership-partners-logos">
            <img className="sun-bum-pitch__partnership-partners-logo--wavesWifi" src={require('../../images/Waves-Wifi-Logo-Final.svg').default} alt="Waves & Wifi" />
            <img src={require('../../images/Outerknown-Logos-01.png')} alt="Outerknown" />
            <img src={require('../../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp')} alt="Surfrider Foundation" />
            <img src={require('../../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default} alt="Deep Sea Conserve" />
          </div>
        </div>

        <p className="sun-bum-pitch__kicker">The Ask</p>
        <p className="sun-bum-pitch__partnership-text is-tight">
          I'm looking for a small number of partners to help bring this documentary
          series to life.
        </p>
        <p className="sun-bum-pitch__partnership-text is-tight">
          In return, I'll create authentic, story-driven content that puts your
          products in the environments they're designed for — from the saltwater and
          surf to long days exploring the outdoors.
        </p>
        <p className="sun-bum-pitch__partnership-text is-tight">
          Partnerships can include production support, gear for the journey,
          dedicated short-form content, product integration, and photography or
          video assets for your own channels.
        </p>
        <p className="sun-bum-pitch__partnership-text">
          Rather than traditional advertising, I want to build partnerships around
          products I genuinely use and stories worth telling.
        </p>

        <div className="sun-bum-pitch__partnership-asks">
          {asks.map((item) => (
            <div className="sun-bum-pitch__animate sun-bum-pitch__partnership-ask" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sun-bum-pitch__section sun-bum-pitch__cta">
        <div className="sun-bum-pitch__animate sun-bum-pitch__cta-content">
          <p className="sun-bum-pitch__kicker">Let's Go</p>
          <h2 className="sun-bum-pitch__title">Let's Protect What's Wild Together</h2>
          <p className="sun-bum-pitch__cta-subtext">Ready to put {pitch.brand} at the heart of this story?</p>
          <div className="sun-bum-pitch__cta-links">
            <a className="sun-bum-pitch__cta-link" href="mailto:j.caudill7177@gmail.com">Email</a>
            <a className="sun-bum-pitch__cta-link" href="https://www.instagram.com/jam.caudill/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="sun-bum-pitch__cta-link" href="https://substack.com/@jamcaudill" target="_blank" rel="noreferrer">Substack</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SunBumPitch;
