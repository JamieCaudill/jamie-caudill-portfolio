import './App.css';
import Intro from './components/Intro/Intro';
import React from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { gsap } from 'gsap';

const bounceElement = () => {
  gsap.to(".intro__container", {duration: 2, y: 300, backgroundColor: "#560563", ease: "bounce"})
}

gsap.from(".intro__container", {duration: 2.5, y: -500, ease: "power4.out" })

function App() {
  return (
    <main className="app">
      <Navbar />
      <Intro bounceElement={bounceElement}/>
      <Projects />
    </main>
  );
}

export default App;
