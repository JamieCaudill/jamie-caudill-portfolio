import './App.scss';
import Intro from './components/Intro/Intro';
import React from 'react';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Packages from './components/Packages/Packages';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <main className="app">
      <Intro />
      <About />
      <Portfolio />
      <Packages />
      <Contact />
    </main>
  );
}

export default App;
