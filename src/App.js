import './App.scss';
import Intro from './components/Intro/Intro';
import React from 'react';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <main className="app">
      <Intro />
      <About />
      <Portfolio />
    </main>
  );
}

export default App;
