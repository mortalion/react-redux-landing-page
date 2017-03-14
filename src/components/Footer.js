import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
  			<Container>
  				<Row>
  					<Col xs="12" sm="3">
              <p>Created by Patrick Jamieson</p>
              <p>patrick@cleancodecorp.com</p>
  					</Col>
  					<Col xs="4" sm="2">
  						<Nav className="flex-column">
  							<NavItem>
                  <NavLink href="#now">Skills</NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="#roles">Roles</NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="#then">Foundation</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#clients">Clients</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
  						</Nav>
  					</Col>
  					<Col xs="12" sm="2">
  						<Nav className="flex-column">
  							<NavItem>
                  <NavLink href="https://github.com/pjamieson/react-bootstrap4-resume" target="_blank">
                    <FontAwesome name="github" className="footer-icon" size="3x" />
                  </NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="https://www.linkedin.com/in/patrick-react-jamieson/" target="_blank">
                    <FontAwesome name="linkedin" className="footer-icon" size="3x" />
                  </NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="https://twitter.com/patrickjamieson" target="_blank">
                  <FontAwesome name="twitter" className="footer-icon" size="3x" />
                  </NavLink>
                </NavItem>
  						</Nav>
  					</Col>
  					<Col xs="12" sm="5">
  						<h6>Disclaimer</h6>
  						<p>I am not a web designer, even though you may have seen me playing
                one on this site. Ratione provident soluta veritatis beatae eaque dolorem reiciendis
                inventore non earum nemo, voluptate itaque consequatur quidem alias
                pariatur ducimus laboriosam reprehenderit. Totam.</p>
  					</Col>
  				</Row>
          <Row>
            <Col>
              <p>Copyright 2017. All rights reserved.</p>
            </Col>
          </Row>
  			</Container>
  		</footer>
    );
  }
}

export default Footer;
