import React, { Component } from 'react';
import foundation from '../assets/images/foundation.jpeg';
import './ThenSection.css';

class ThenSection extends Component {
  render() {
    return (
      <section id="then" className="Then">
        <img src={foundation} width="100%" alt="foundation" />
      </section>
    );
  }
}

export default ThenSection;
