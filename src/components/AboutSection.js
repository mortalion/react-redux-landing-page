import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import patrick from '../assets/images/patrick-paris.jpg';
import rebecca from '../assets/images/rebecca-upsalla.jpg';
import ngu from '../assets/images/ngu-saigon.jpg';
import hongkong from '../assets/images/hong-kong.jpg';

import './AboutSection.css';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <section id="about" className="AboutSection">
        <Carousel activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={(i,e)=>this.handleSelect(i,e)}>
          <Carousel.Item>
            <img src={patrick} alt="patrick"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={rebecca} alt="rebecca"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={hongkong} alt="hong-kong"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={ngu} alt="ngu-saigon"/>
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    );
  }
}

export default AboutSection;
