import './details.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import jquery from '../assets/jquery.png';
import Herogen from './Herogen';
import pages from '../assets/pages.jpg';

const Details = () => {
  const backgroundImg = pages;
  const title = 'About Me';
  const summary = 'Me in the world of web development';
  return (

    <div className="about">
      <div className="about-container">
        <div className="aboutme">
          <Herogen title={title} summary={summary} backgroundImg={backgroundImg} />

          <div className="more">
            <p>
              I&apos;m a dedicated Full Stack Developer with expertise in HTML,
              CSS, JavaScript, Ruby, React, Node.js, and Ruby on Rails.
              Proficient in database management and cloud deployment.
              Known for clean code and seamless user experiences.
              Eager to collaborate on innovative web projects.
            </p>
            <h3 className="social" id="connect">LET’S CONNECT</h3>
            <ul className="socialIcon" id="socialicon2">
              <li><SocialIcon url="https://twitter.com/pawroyale_" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
              <li><SocialIcon url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
              <li><SocialIcon url="https://github.com/AyomipoMajek" target="_blank" fgColor="#fff" bgColor="transparent" style={{ width: 40, height: 40 }} /></li>
            </ul>

            <a href="https://docs.google.com/document/d/1DCQsOfgIvYsjL7lI3ma-GyXfDoODmK0vfAe9w551I-w/edit?usp=sharing" download>
              <button className="btn" id="btn4" type="button">Get my resume</button>
            </a>
          </div>

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
};

export default Details;
