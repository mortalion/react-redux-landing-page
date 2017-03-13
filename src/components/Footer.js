import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
  			<Container>
  				<Row>
  					<Col sm="4">
              <Row>
                <Col>
                  <p>Created by Patrick Jamieson</p>
                  <p>patrick@cleancodecorp.com</p>
                </Col>
              </Row>
  					</Col>
  					<Col sm="2">
  						<Nav className="flex-column">
  							<NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
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
  					<Col sm="3">
  						<Nav className="flex-column">
  							<NavItem>
                  <NavLink href="">Facebook</NavLink></NavItem>
  							<NavItem>
                  <NavLink href="https://github.com/pjamieson/react-bootstrap4-resume"
                  target="_blank">GitHub</NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="https://www.linkedin.com/in/patrick-react-jamieson/"
                  target="_blank">LinkedIn</NavLink>
                </NavItem>
  							<NavItem>
                  <NavLink href="">Twitter</NavLink>
                </NavItem>
  						</Nav>
  					</Col>
  					<Col sm="3">
  						<h6>Disclaimer</h6>
  						<p>I am not a web designer, even though you may have seen me playing
                one on this site. Ratione provident soluta veritatis beatae eaque dolorem reiciendis
                inventore non earum nemo, voluptate itaque consequatur quidem alias
                pariatur ducimus laboriosam reprehenderit. Totam.</p>
  					</Col>
  				</Row>
          <Row>
            <Col>
              <p>Shameless Link for SEO</p>
              <p>Copyright 2017. All rights reserved.</p>
            </Col>
          </Row>
  			</Container>
  		</footer>
    );
  }
}

export default Footer;
