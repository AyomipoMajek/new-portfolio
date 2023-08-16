import './about.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const About = () => (
  <div className="about">
    <div className="about-container">
      <div className="aboutme">
        <h1>About Myself</h1>
        <p>
          I am a committed Full Stack Developer, skilled in both front-end and back-end technologies. My proficiency spans HTML, CSS, JavaScript, Ruby, as well as frameworks including React, Node.js, and Ruby on Rails. My experience extends to database management (MySQL, MongoDB) and cloud platform deployment. Known for my attention to detail and collaborative spirit, I am dedicated to crafting clean code. With a fervor for delivering seamless user experiences, I am excited to join forces on inventive web development ventures.
        </p>

        <h3 className="social">LET’S CONNECT</h3>
        <ul className="socialIcon">
          <li><SocialIcon url="https://twitter.com" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
          <li><SocialIcon url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
          <li><SocialIcon url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        </ul>

        <a href="https://docs.google.com/document/d/1DCQsOfgIvYsjL7lI3ma-GyXfDoODmK0vfAe9w551I-w/edit?usp=sharing" download>
          <button class="button">Get my resume</button>
        </a>

      </div>
      <div className="skills">
        
      </div>
    </div>
  </div>
);

export default About;
