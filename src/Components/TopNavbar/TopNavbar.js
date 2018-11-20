import React, { Component } from 'react';
import { Navbar, Nav, Image, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

class TopNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="top-nav-bar" collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Image className="nav-bar-icon" src="/color_logo_transparent.svg" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="top-nav">
              <NavItem id="home-nav">
                <Link to="/" className="home-link-text">Home</Link>
              </NavItem>
              <NavItem id="services-nav">
                <Link to="/services" className="services-link-text">Expertise & Services</Link>
              </NavItem>
              <NavItem id="about-nav">
                <Link to="/about" className="about-link-text">About Us</Link>
              </NavItem>
              <NavItem id="contact-nav">
                <Link to="/contact" className="contact-link-text">Contact</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;