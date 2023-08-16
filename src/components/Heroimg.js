import "./heroimg.css";
import React from 'react';
import { SocialIcon } from "react-social-icons";
import realhome from "../assets/realhome.jpg";

const Heroimg = () => {
  return (
    <div className="background">
      <div className="heroimg">
        <img className="home-img" src={realhome} alt="homepagebackground"/>
      </div>
      <div className="hero-text">
        <h1>I'm Majek <br /> Glad to see you!</h1>
        <p>
        Empower your digital aspirations with my coding prowess!
        From dynamic products to standout features and captivating websites,
        I'm your software development partner.
        Explore my portfolio for a taste of my expertise.
        Ready to transform ideas into reality? Let's chat!
        </p>
        <h3 class="social">LET’S CONNECT</h3>
        <ul class="socialIcon">
          <li><SocialIcon url="https://twitter.com" target="_blank" fgColor="#fff" bgColor="transparent" /></li>
          <li><SocialIcon url="https://www.linkedin.com/in/ayomipomajek/" target="_blank" fgColor="#fff" bgColor="transparent" /></li>
          <li><SocialIcon url="https://github.com/AyomipoMajek"target="_blank" fgColor="#fff" bgColor="transparent" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Heroimg