import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import cloud from '../assets/images/TechStackWordCloud.svg';
import './NowSection.css';

class NowSection extends Component {
  render() {
    return (
      <section id="now" className="NowSection">
        <Container>
          <Row>
            <Col xs="4">
              <div className="do-it">
                <h1>Let's do it!</h1>
                <FontAwesome name="long-arrow-right" className="long-arrow bounce" size="5x" />
                <h3 className="subtitle">These are a few of my favorite things.</h3>
              </div>
            </Col>
            <Col xs="8">
              <div className="cloud">
                <img className="img-fluid" src={cloud} alt="tech word cloud" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default NowSection;
