import './herogen.css';
import React from 'react';
import PropTypes from 'prop-types';

const Herogen = ({ title, summary, backgroundImg }) => (
  <div className="herogen" style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="heading">
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  </div>
);

Herogen.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default Herogen;
