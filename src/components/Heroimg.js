import './heroimg.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import realhome from '../assets/realhome.jpg';

const Heroimg = () => (
  <div className="background">
    <div className="heroimg">
      <img className="home-img" src={realhome} alt="homepagebackground" />
    </div>
    <div className="hero-text">
      <h1>
        I'm
        {' '}
        <span className="majek">Majek</span>
        <br />
        {' '}
        Glad to see you!
      </h1>
      <p>
        Empower your digital aspirations with my coding prowess!
        From dynamic products to standout features and captivating websites,
        I'm your software development partner.
        Explore my portfolio for a taste of my expertise.
        Ready to transform ideas into reality? Let's chat!
      </p>
      <h3 className="social">LET’S CONNECT</h3>
      <ul className="socialIcon">
        <li><SocialIcon url="https://twitter.com" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        <li><SocialIcon url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        <li><SocialIcon url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
      </ul>
    </div>
  </div>
);

export default Heroimg;
