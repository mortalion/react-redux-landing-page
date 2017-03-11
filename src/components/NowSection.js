import React, { Component } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import cloud from '../assets/TechStackWordCloud.svg';
import './NowSection.css';

class NowSection extends Component {
  render() {
    return (
      <section id="now" className="NowSection">
        <Container>
          <Row>
            <Col xs="5">
              <h1>Let's do it!</h1>
              <hr className="my-2" />
              <p className="lead">These are a few of my favorite things.</p>
            </Col>
            <Col xs="7">
              <div className="NowSection-vcenter">
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
