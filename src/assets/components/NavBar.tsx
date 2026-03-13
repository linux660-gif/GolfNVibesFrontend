import { useState } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
//import { BsPersonCircle, BsCartCheckFill } from "react-icons/bs";

import './NavBar.css';

function NavBar() {
  const [showEvents, setShowEvents] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Navbar expand="lg" variant="dark" className="fixed-top modern-nav bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-logo">
          Golf <span className="vibe-text">N</span> Vibes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="https://google.com" className="nav-link-ltr">Home</Nav.Link>
            <NavDropdown
              title="Events"
              id="events-dropdown"
              show={showEvents}
              onMouseEnter={() => setShowEvents(true)}
              onMouseLeave={() => setShowEvents(false)}
              className="custom-dropdown"
            >
              <NavDropdown.Item href="#">Morocco</NavDropdown.Item>
              <NavDropdown.Item href="#">Kenya</NavDropdown.Item>
              <NavDropdown.Item href="#">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#">South Africa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Past Events</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="About Us"
              id="about-dropdown"
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
              className="custom-dropdown"
            >
              <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="nav-link-ltr">Register</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center personalprofile">
            {/*
            <Nav.Link href="#" className="icon-link">
              <div className="cartprofile">
                <BsCartCheckFill size={20} />
              </div>
            </Nav.Link>
            
            <Nav.Link href="#" className="icon-link">
              <div className="userprofile">
                <BsPersonCircle size={20} />
              </div>
            </Nav.Link>
            */}

            <Nav.Link href="#" className="login-link">Login</Nav.Link>
            
            <Nav.Item onClick={() => setShowSignUp(true)}>
              <a href="#" className="btn btn-outline-light signup-btn ms-lg-3">
                Sign Up
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;