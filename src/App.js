import './App.scss';
import Intro from './components/Intro/Intro';
import React from 'react';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Audience from './components/Audience/Audience';
import Packages from './components/Packages/Packages';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <main className="app">
      <Intro />
      <About />
      <Portfolio />
      <Audience />
      <Packages />
      <Brands />
      <Contact />
    </main>
  );
}

export default App;
