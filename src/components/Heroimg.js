import './heroimg.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
// import realhome from '../assets/realhome.jpg';
import newback from '../assets/newback.jpg';

const Heroimg = () => (
  <div className="background">
    <div className="heroimg">
      <img className="home-img" src={newback} alt="homepagebackground" />
    </div>
    <div className="hero-text">
      <h1>
        I&apos;m
        {' '}
        <span className="majek">Majek</span>
        <br />
        {' '}
        Glad to see you!
      </h1>
      <p>
        Empower your digital aspirations with my coding prowess!
        From dynamic products to standout features and captivating websites,
        I&apos;m your software development partner.
        Explore my portfolio for a taste of my expertise.
        Ready to transform ideas into reality?
      </p>
      <h3 className="social">LET&apos;S CONNECT</h3>
      <ul className="socialIcon">
        <li><SocialIcon className="icon" url="https://twitter.com" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 50, height: 50 }} /></li>
        <li><SocialIcon className="icon" url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 50, height: 50 }} /></li>
        <li><SocialIcon className="icon" url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 50, height: 50 }} /></li>
      </ul>
    </div>
  </div>
);

export default Heroimg;
