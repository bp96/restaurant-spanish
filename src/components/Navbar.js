import React, { Component } from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavbarBootstrap.css';

class NavBar extends Component {
render() {
  return (
<Navbar className='generalNavbar' fixed='top' expand="lg">
  <Navbar.Brand href="">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className='ml-auto nav-item'>
      <Nav.Link href="" className='nav-item'>Home</Nav.Link>
      <NavDropdown className='nav-item' title="Our Menu" id="basic-nav-dropdown">
        <NavDropdown.Item className='nav-item' href="">Dinner</NavDropdown.Item>
        <NavDropdown.Item className='nav-item' href="">Dessert</NavDropdown.Item>
        <NavDropdown.Item className='nav-item' href="">Wine</NavDropdown.Item>
        <NavDropdown.Item className='nav-item' href="">Sherries</NavDropdown.Item>
        <NavDropdown.Item className='nav-item' href="">Paella</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className='nav-item' href="">Happy Hour</Nav.Link>
      <Nav.Link className='nav-item' href="">Events</Nav.Link>
      <Nav.Link className='nav-item' href="">Catering</Nav.Link>
      <Nav.Link className='nav-item' href="">Gallery</Nav.Link>
      <Nav.Link className='nav-item' href="">About Us</Nav.Link>
      <Nav.Link className='nav-item' href="">Reserve Now</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
}

export default NavBar;
