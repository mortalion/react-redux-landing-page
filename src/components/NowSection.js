import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import cloud from '../assets/TechStackWordCloud.svg';
import './NowSection.css';

class NowSection extends Component {
  render() {
    return (
      <section id="now" className="NowSection">
        <Container>
          <Row>
            <Col xs="5">
              <div className="do-it">
                <h1>Let's do this!</h1>
                <hr className="my-sm-3 bounce" />
                <h3 className="subtitle">These are a few of my favorite things.</h3>
              </div>
            </Col>
            <Col xs="7">
              <img className="img-fluid" src={cloud} alt="tech word cloud" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default NowSection;
