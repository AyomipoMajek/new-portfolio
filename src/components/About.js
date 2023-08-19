import './about.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import jquery from '../assets/jquery.png';

const About = () => (
  <div className="about">
    <div className="about-container">
      <div className="aboutme">
        <h1>About Myself</h1>
        <p>
          I&apos;m a dedicate
        </p>

        <h3 className="social">LET’S CONNECT</h3>
        <ul className="socialIcon">
          <li><SocialIcon url="https://twitter.com" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
          <li><SocialIcon url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
          <li><SocialIcon url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
        </ul>

        <a href="https://docs.google.com/document/d/1DCQsOfgIvYsjL7lI3ma-GyXfDoODmK0vfAe9w551I-w/edit?usp=sharing" download>
          <button className="btn" type="button">Get my resume</button>
        </a>

      </div>
      <div className="skillbox">
        <div className="languages">
          <h4>Languages</h4>
          <ul
            className="my-languages"
          >
            <li>
              <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/ruby-programming-language.png" alt="Ruby" />
              <p>Ruby</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML" />
              <p>HTML</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/css3.png" alt="CSS" />
              <p>CSS</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/sass-avatar.png" alt="Sass" />
              <p>Sass</p>
            </li>
          </ul>
        </div>

        <div className="languages">
          <h4>Frameworks & Libraries</h4>
          <ul
            className="my-languages"
          >
            <li>
              <img src="https://img.icons8.com/color/48/react-native.png" alt="React" />
              <p>React</p>
            </li>
            <li>
              <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png" alt="Rails" />
              <p>Rails</p>
            </li>
            <li>
              <img className="jquery" src={jquery} alt="jquery" />
              <p>JQuery</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/bootstrap.png" alt="Bootstrap" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </div>

        <div className="languages">
          <h4>Skills</h4>
          <ul
            className="my-languages"
          >
            <li>
              <img src="https://img.icons8.com/color/48/org-unit.png" alt="APIs" />
              <p>API</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/git.png" alt="Git" />
              <p>Git</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/api-settings.png" alt="Unit Testing" />
              <p>Unit Testing</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/postgreesql.png" alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;