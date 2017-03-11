import React, { Component } from 'react';
import cloud from '../assets/TechStackWordCloud.svg';
import './WhoSection.css';

class WhoSection extends Component {
  render() {
    return (
      <section id="who" className="Who">
        <img src={cloud} width="50%" alt="tech word cloud" />
      </section>
    );
  }
}

export default WhoSection;
