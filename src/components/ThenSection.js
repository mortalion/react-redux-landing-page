import React, { Component } from 'react';
import foundation from '../assets/images/foundation-10.jpg';
import BricksList from './BricksList';
import './ThenSection.css';

class ThenSection extends Component {
  constructor(props) {
    super(props);
    this.state =  { loading: 1 }; // Only loading the background image
    this.showSection = this.showSection.bind(this);
  }
  showSection() {
    let { loading } = this.state;
    this.showSection = (loading === 0);
  }
  imageLoaded() {
    let remaining_to_load = this.state.loading -1;
    this.setState({ loading: remaining_to_load });
  }
  render() {
    let classHide = this.state.showsection ? "hide" : "";
    return (
      <section id="then" className={"ThenSection " + classHide}>
        <img src={foundation} width="100%" alt="foundation"
          onLoad={this.imageLoaded.bind(this)} />
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
