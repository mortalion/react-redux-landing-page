import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import patrick from '../assets/images/patrick-paris-8.jpg';
import brazil from '../assets/images/brazil-8.jpg';
import ngu from '../assets/images/ngu-saigon-8.jpg';
import hongkong from '../assets/images/hong-kong-airport-8.jpg';

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
              <h6>I don't really have a halo</h6>
              <p>Photo location: Musee du Louvre, Paris, France</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={brazil} alt="brazil"/>
            <Carousel.Caption>
              <h6>Sometimes you need a guide</h6>
              <p>Photo location: Lençóis Maranhenses, Maranhão, Brasil</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={ngu} alt="ngu-saigon"/>
            <Carousel.Caption>
              <h6>My coolest gig ever</h6>
              <p>Photo location: Ho Chi Minh City, Vietnam</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={hongkong} alt="hongkong-airport"/>
            <Carousel.Caption>
              <h6>Where I want to go</h6>
              <p>Photo location: Hong Kong airport train station</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    );
  }
}

export default AboutSection;
