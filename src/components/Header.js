import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.svg';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Header">
        <Navbar color="faded" light toggleable fixed="top">
          <NavbarToggler right onClick={this.toggle} />
          <img src={logo} className="Header-logo" alt="logo" />
          <NavbarBrand href="/">Patrick Jamieson</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#now">Now</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#roles">Roles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#then">Then</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#clients">Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/patrickflexjamieson/" target="_blank">
                Linked In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" target="_blank">
                  Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
