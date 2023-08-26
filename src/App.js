import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
