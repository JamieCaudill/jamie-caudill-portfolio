import './App.scss';
import Intro from './components/Intro/Intro';
import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".intro__container", {duration: 2.5, y: -500, ease: "power4.out" })



function App() {

  return (
    <main className="app">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
