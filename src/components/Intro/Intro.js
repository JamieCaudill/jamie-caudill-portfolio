// Intro.js

import './Intro.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  useLayoutEffect(() => {
    gsap.fromTo(".intro__name", {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: .5,
      ease: "power2.out",
    })

    gsap.fromTo(".intro__tagline", {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <video
        className="intro__video"
        src="/videos/hero-reel.mp4"
        poster={require('../../images/background.jpg')}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="intro__overlay" />
      <div className="intro__text-container">
        <h1 className="intro__name">Jamie Caudill</h1>
        <p className="intro__tagline">Digital Media</p>
      </div>
    </div>
  )
}

export default Intro;