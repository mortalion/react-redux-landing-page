import React, { Component } from 'react';
import foundation from '../assets/images/foundation-10.jpg';
import BricksList from './BricksList';
import './ThenSection.css';

class ThenSection extends Component {

  render() {
    return (
      <section id="then" className="ThenSection">
        <img src={foundation} width="100%" alt="foundation" />
        <div className="headline">
          <h1>Been there.<span className="done-that">Done that.</span></h1>
        </div>
        <div className="bricks-list">
          <BricksList />
        </div>
      </section>
    );
  }
}

export default ThenSection;
