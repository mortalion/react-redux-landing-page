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
            <section className="about-text patrick">
              <h3>About me</h3>
              <p>I don&rsquo;t really have a halo; the sun here is backlighting
                my shiny dome. But I <em>do</em> have preferences:</p>
              <p className="list-item">React over Angular</p>
              <p className="list-item">AWS over Google Cloud</p>
              <p className="list-item">NoSQL over MySQL</p>
              <p className="list-item">Flip-Flops over Shoes</p>
            </section>
            <p className="photo-credit">
              Photo &copy; Rebecca Jamieson
            </p>
            <p className="photo-location">
              Musee du Louvre, Paris, France
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img src={brazil} alt="brazil"/>
            <section className="about-text guide">
              <h3>Follow me</h3>
              <p>Sometimes you need a guide. I have deep experience
                in these domains:</p>
                <p className="list-item">Print &amp; Digital Publishing</p>
                <p className="list-item">Healthcare &amp; Pharma</p>
                <p className="list-item">Advertising &amp; Retail</p>
              <p>That said, I love learning new things.</p>
            </section>
            <p className="photo-credit">
              Photo &copy; Patrick Jamieson
            </p>
            <p className="photo-location">
              Lençóis Maranhenses, Maranhão, Brasil
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ngu} alt="ngu-saigon"/>
            <section className="about-text coolest-gig">
              <h3>My Coolest Gig</h3>
              <p>In 2014, I spent three months in Ho Chi Minh City, Vietnam, working
                with a terrific off-shore team.</p>
              <p>This is Ngu, our Business Analyst. He became a great friend, teaching
                me how to use public transit, and introducing me to his uncles and his
                grandmother.</p>
            </section>
            <p className="photo-credit">
              Photo &copy; Patrick Jamieson
            </p>
            <p className="photo-location">
              Ho Chi Minh City, Vietnam
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hongkong} alt="hongkong-airport"/>
            <section className="about-text bucket-list">
              <h3>My Bucket List</h3>
              <p>I&rsquo;ve done a lot, but there&rsquo;s plenty more to do.</p>
              <p className="list-item">Win <em>The Amazing Race</em></p>
              <p className="list-item">Hike the Pacific Trail</p>
              <p className="list-item">See the Northern Lights</p>
              <p className="list-item">Work for Kiva</p>
              <p>Maybe your project should be on my list, too. Call me.</p>
            </section>
            <p className="photo-credit">
              Photo &copy; Patrick Jamieson
            </p>
            <p className="photo-location">
              Hong Kong Airport Train Station
            </p>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default AboutSection;
