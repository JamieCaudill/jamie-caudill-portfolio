import './App.css';
import Intro from './components/Intro/Intro';
import React from 'react';
import { Element, Link } from 'react-scroll';
import Main from './components/Main/Main';
import ScrollNavigation from './components/ScrollNavigation/ScrollNavigation';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main className="app">
      <Navbar />
      <Intro />
      <Main />
    </main>
  );
}

export default App;
