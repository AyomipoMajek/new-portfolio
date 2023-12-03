import './heroimg.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import newback from '../assets/newback.jpg';

const Heroimg = () => (
  <div className="background">
    <div className="heroimg">
      <img className="home-img" src={newback} alt="homepagebackground" />
    </div>
    <div className="hero-text">
      <div className="myinfo">
        <h1>
          I&apos;m
          {' '}
          <span className="majek">Majek</span>
          <br />
          {' '}
          Glad to see you!
        </h1>
      </div>
      <p>
        I&apos;m your full-stack software development partner.
        I am highly skilled in creating dynamic products, standout features
        and captivating websites.
        Let&apos;s get started.
      </p>
      <h3 className="social">LET&apos;S CONNECT</h3>
      <ul className="socialIcon">
        <li><SocialIcon className="icon" url="https://twitter.com/pawroyale_" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        <li><SocialIcon className="icon" url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        <li><SocialIcon className="icon" url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
      </ul>
    </div>
  </div>
);

export default Heroimg;
