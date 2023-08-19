import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Herogen from '../components/Herogen';

const Portfolio = () => (
  <div>
    <Navbar />
    <Herogen heading="PROJECTS" text="A few of my most recent projects" />
    <About />
  </div>
);

export default Portfolio;
