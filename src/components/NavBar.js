import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <div>
    <Navbar expand="xl" className="navbar">
        <Navbar.Brand href="/">
            <img
                src={require('../images/FrattyBearIcon.png')}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Fratty Bear logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to={'/group-orders'} className="tab" activeClassName="selected">GROUP ORDERS</NavLink>
              <NavLink to={'/shop'} className = "tab" activeClassName="selected">RETAIL SHOP</NavLink>
              <NavLink to={'/about'} className = "tab" activeClassName="selected">ABOUT</NavLink>
              <NavLink to={'/past-work'} className = "tab" activeClassName="selected">PAST WORK</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>

);

export default NavBar;