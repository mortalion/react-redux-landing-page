import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import alphaeon from '../assets/alphaeon-logo.png';
import amgen from '../assets/amgen-logo.png';
import apple from '../assets/apple-logo.png';
import ca from '../assets/ca-logo.png';
import gilead from '../assets/gilead-logo.png';
import janssen from '../assets/janssen-logo.png';
import kaiser from '../assets/kp-logo.jpeg';
import lp from '../assets/lp-logo.png';
import resto from '../assets/resto-logo.jpg';
import saic from '../assets/saic-logo.png';
import tmobile from '../assets/tmobile-logo.jpeg';
import zinio from '../assets/zinio-logo.png';
import './ClientsSection.css';

class ClientsSection extends Component {
  render() {
    return (
      <section id="clients" className="ClientsSection">
        <Container>
          <Row>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={alphaeon} alt="alphaeon" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={amgen} alt="amgen" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={apple} alt="apple" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={ca} alt="ca" />
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
              <img className="img-fluid" src={resto} alt="resto" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={saic} alt="saic" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={tmobile} alt="t-mobile" />
            </Col>
            <Col className="client_logo" xs="4" sm="3" md="2" xl="1">
              <img className="img-fluid" src={zinio} alt="zinio" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ClientsSection;
