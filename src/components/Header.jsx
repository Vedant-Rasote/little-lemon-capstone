import React from "react";
import headerLogo from "../images/Asset 16@4x.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="border-bottom glass_morph fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to='/' aria-label="Little Lemon Home"><img width="200" src={headerLogo} alt="Little Lemon logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 fw-medium">
              <Nav.Link href="#home" aria-label="Home">Home</Nav.Link>
              <Nav.Link href="#about" aria-label="About">About</Nav.Link>
              <Nav.Link href="#specials" aria-label="Menu">Menu</Nav.Link>
              <Nav.Link href="#gallery" aria-label="Gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact" aria-label="Contact">Contact</Nav.Link>
            </Nav>

            <div className="d-flex justify-content-start">
              <button className="btn btn-light rounded-circle p-3 lh-1 me-1 border" type="button" aria-label="Shopping Bag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>
              </button>
              <button className="btn btn-dark rounded-pill px-3 ms-1" type="button" aria-label="Login">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
