import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import amgen from '../assets/logos/amgen-logo.png';
import apple from '../assets/logos/apple-logo.png';
import ca from '../assets/logos/ca-logo.png';
import eveo from '../assets/logos/eveo-logo.jpg';
import gilead from '../assets/logos/gilead-logo.png';
import janssen from '../assets/logos/janssen-logo.png';
import kaiser from '../assets/logos/kp-logo.jpeg';
import lp from '../assets/logos/lp-logo.png';
import resto from '../assets/logos/resto-logo.jpg';
import saic from '../assets/logos/saic-logo.png';
import tmobile from '../assets/logos/tmobile-logo.jpeg';
import zinio from '../assets/logos/zinio-logo.png';
import './ClientsSection.css';

class ClientsSection extends Component {
  render() {
    return (
      <section id="clients" className="ClientsSection">
        <Container>
          <Row>
            <Col>
              <h6>Here's an even dozen of my previous employers and clients</h6>
            </Col>
          </Row>
          <Row>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={amgen} alt="amgen" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={apple} alt="apple" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={ca} alt="ca" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={eveo} alt="eveo" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={gilead} alt="gilead" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={janssen} alt="janssen" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={kaiser} alt="kaiser" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={lp} alt="lonely-planet" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={resto} alt="resto" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={saic} alt="saic" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={tmobile} alt="t-mobile" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid soften-black" src={zinio} alt="zinio" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ClientsSection;
