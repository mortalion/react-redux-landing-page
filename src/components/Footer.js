import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import badge from '../assets/images/aws-saa-badge.png';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Container>
          <Row>
            <Col sm="11" xs="10">
              <p>&nbsp;</p>
            </Col>
            <Col sm="1" xs="2">
              <a href="#now" className="top-link">top</a>
            </Col>
          </Row>
          <Row>
            <Col sm="2" xs="3">
              <Nav className="footer-nav">
                <NavItem>
                  <NavLink href="https://github.com/pjamieson/react-redux-landing-page" target="_blank">
                    <FontAwesome name="github" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/patrick-react-jamieson/" target="_blank">
                    <FontAwesome name="linkedin" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-06-08&ci=AWS00280356" target="_blank">
                    <img src={badge} className="footer-badge" alt="badge" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="3" sm="4" xs="9">
              <Row>
                <div className="wrapper">
                  <h6>Contact</h6>
                  <div className="left">
                    <p className="name">patrick@</p>
                  </div>
                  <div className="right">
                    <p className="domain">patrickjamieson.com</p>
                    <p className="domain">cleancodecorp.com</p>
                    <p className="domain">ibookx.com</p>
                    <p className="domain">iartx.com</p>
                  </div>
                </div>
              </Row>
              <Row>
                <p className="principals-only"><em>Principals only please</em></p>
              </Row>
            </Col>
            <Col sm="5" xs="12">
              <h6>Disclaimer</h6>
              <p className="disclaimer-text">
                I am not a web designer, even though you may have seen me playing
                one on this site. It seems to me that a disclaimer should probably disclaim
                more than that, so here&rsquo;s some Hipster Ipsum fine print for your
                reading pleasure: Godard meggings kale chips helvetica, semiotics
                literally quinoa lomo. Jean shorts poutine mustache, skateboard
                laboris artisan migas dolore cred blog venmo. Ciao.
            </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p>Created by Patrick Jamieson</p>
              <p className="copyright">Copyright 2017. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
