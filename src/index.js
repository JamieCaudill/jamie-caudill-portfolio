import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import SponsorshipPitch from './components/SponsorshipPitch/SponsorshipPitch';
import SurfriderPitch from './components/SurfriderPitch/SurfriderPitch';
import OuterknownPitch from './components/OuterknownPitch/OuterknownPitch';
import PatagoniaPitch from './components/PatagoniaPitch/PatagoniaPitch';
import SunBumPitch from './components/SunBumPitch/SunBumPitch';
import ZealOpticsPitch from './components/ZealOpticsPitch/ZealOpticsPitch';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sponsorship/:slug" element={<SponsorshipPitch />} />
        <Route path="/sponsorship/surfrider-foundation" element={<SurfriderPitch />} />
        <Route path="/sponsorship/outerknown" element={<OuterknownPitch />} />
        <Route path="/sponsorship/patagonia" element={<PatagoniaPitch />} />
        <Route path="/sponsorship/sun-bum" element={<SunBumPitch />} />
        <Route path="/sponsorship/zeal-optics" element={<ZealOpticsPitch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
