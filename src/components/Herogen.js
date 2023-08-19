import './herogen.css';
import React, { Component } from 'react';

class Herogen extends Component {
  render() {
    return (
      <div className="herogen">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Herogen;
