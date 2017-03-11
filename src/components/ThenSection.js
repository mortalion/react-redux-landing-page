import React, { Component } from 'react';
import stage from '../assets/stage.jpg';
import './ThenSection.css';

class ThenSection extends Component {
  render() {
    return (
      <section id="then" className="Then">
        <img src={stage} width="100%" alt="stage" />
      </section>
    );
  }
}

export default ThenSection;
