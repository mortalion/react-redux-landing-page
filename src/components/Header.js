import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logos/react-logo.svg';
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
          <img src={logo} className="logo" alt="logo" />
          <div className="patrick">
            <p className="name">Patrick Jamieson</p>
            <p className="title">Senior Full-Stack Developer</p>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#now">Now</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#then">Then</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#roles">Roles</NavLink>
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
