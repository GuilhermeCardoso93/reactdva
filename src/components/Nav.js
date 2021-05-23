import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import pixel1 from "../assets/pixel2.png";
import pixel2 from "../assets/pixel3.png";
import pixel3 from "../assets/pixel5.png";


import "./Nav.scss";

const Navigation = () => (
  <Navbar className="navbar fixed-top" expand="lg" variant='light'>
    <Container>
      <Navbar.Brand>
        <Link to="/"  style={{ textDecoration: 'none', color: 'white' }}>
        <img
          src={logo2}
          height="40"
          width="120"
          className="d-inline-block align-top m-1"
          alt="d.va logo"
        />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav text-center pl-5" />
      <Navbar.Collapse id="basic-navbar-nav m-1">
        <Nav className="align-text-center lg-pr-5 lg-mr-5">
          <Nav.Link  className=" nav-link pl-2 " exact activeStyle= 
  {{textDecoration:'none'}}>
            <Link to="/history" style={{ textDecoration: 'none', color: '#212529'}}>
            <img
              src={pixel1}
              height="70"
              width="60"
              className="d-inline-block"
              alt="d.va pixel"
            />
            HISTORY
            </Link>
          </Nav.Link>
          <Nav.Link className=" Nav-Link pl-2">
          <Link Link to="/hability" style={{ textDecoration: 'none', color: '#212529' }}>
            <img
              src={pixel2}
              height="70"
              width="60"
              className="d-inline-block "
              alt="d.va pixel"
            />
            HABILIDADES
            </Link>
          </Nav.Link>
          <Nav.Link  className=" Nav-Link pl-2" >
            <Link to="/skins" style={{ textDecoration: 'none', color: '#212529'}}> 
            <img
              src={pixel3}
              height="65"
              width="60"
              className="d-inline-block"
              alt="d.va pixel"
            />
            SKINS
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <img
        src={logo}
        height="50"
        width="50"
        className="d-inline-block align-center pl-1"
        alt="d.va bunny"
      />
    </Container>
  </Navbar>
);

export default Navigation;
