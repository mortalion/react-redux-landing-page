import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import foundation from '../assets/images/foundation.jpeg';
import './AboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="AboutSection">
        <Container>
          <Row>
            <Col>
              <img src={foundation} width="100%" alt="foundation" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutSection;
