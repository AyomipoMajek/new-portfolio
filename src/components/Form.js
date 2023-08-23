import './form.css';
import React from 'react';
import Herogen from './Herogen';
import pages from '../assets/pages.jpg';

const Form = () => {
  const backgroundImg = pages;
  const title = 'Contact me';
  const summary = 'Let me bring your imaginations to life!';

  return (
    <section className="contact" id="contactForm">
      <Herogen title={title} summary={summary} backgroundImg={backgroundImg} />

      <form action="https://formspree.io/f/mjvzjjpb" method="POST" id="contact-me-form">
        {/* Name input */}
        <input
          className="single-line-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          maxLength="30"
          required
        />
        {/* Email input */}
        <input
          className="single-line-input"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <small className="error" />
        {/* Message input */}
        <textarea className="comment" placeholder="Write your message here" required name="message" />
        {/* Submit button */}
        <button className="btn" type="submit">Get In Touch</button>
      </form>
    </section>
  );
};

export default Form;
