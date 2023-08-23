import './form.css';
import React from 'react';

const Form = () => (
  <section className="contact" id="contactForm">
    <h2 className="Title">Contact me</h2>
    <p>Let me bring your imaginations to life!</p>
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
      <button className="button" type="submit">Get In Touch</button>
    </form>
  </section>
);

export default Form;
