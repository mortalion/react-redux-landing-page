import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink } from 'reactstrap';
import logo from '../assets/react-logo.svg';
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
