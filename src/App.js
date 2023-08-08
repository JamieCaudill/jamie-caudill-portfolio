import './App.css';
import Intro from './components/Intro/Intro';
import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { gsap } from 'gsap';



gsap.from(".intro__container", {duration: 2.5, y: -500, ease: "power4.out" })

function App() {
  return (
    <main className="app">
      <Navbar />
      <Intro />
      <Projects />
    </main>
  );
}

export default App;
