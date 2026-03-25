import { useState, useRef } from 'react';
import { Nav, Navbar, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import './NavBar.css';
import SignUpModal from './SignUp'; 
import LoginModal from './Login'; 

function NavBar() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const destTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openSignupCloseLogin = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const openLoginCloseSignup = () => {
    setShowSignup(false);
    setShowLogin(true);
  };
  const handleOpen = (setter: React.Dispatch<React.SetStateAction<boolean>>, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setter(true);
  };

  const handleClose = (setter: React.Dispatch<React.SetStateAction<boolean>>, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    timerRef.current = setTimeout(() => setter(false), 150);
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top custom-navbar">
        <Container>
          <Navbar.Brand href="#" className="brand-logo">
            GOLF <span className="vibe-text">N</span> VIBES
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown
                title="Destinations"
                id="destinations-mega-menu"
                show={showDestinations}
                onMouseEnter={() => handleOpen(setShowDestinations, destTimer)}
                onMouseLeave={() => handleClose(setShowDestinations, destTimer)}
                className="mega-menu-static"
              >
                <div className="mega-menu-content">
                  <Container>
                    <Row>
                      <Col lg={4} className="d-none d-lg-block promo-section">
                        <div className="promo-img"></div>
                        <h3 className="promo-title">Play The Game. See The World.</h3>
                        <p className="promo-text">Founded in 1984, Golf N Vibes offers year-round golf and travel experiences.</p>
                        <button className="btn-destinations-overview">Destinations Overview</button>
                      </Col>
                      <Col lg={3} md={4} className="menu-column">
                        <h5>COUNTRIES</h5>
                        <Nav.Link href="#">Scotland</Nav.Link>
                        <Nav.Link href="#">Ireland</Nav.Link>
                        <Nav.Link href="#">Portugal</Nav.Link>
                        <Nav.Link href="#">Spain</Nav.Link>
                      </Col>
                      <Col lg={3} md={4} className="menu-column">
                        <h5>REGIONS</h5>
                        <Nav.Link href="#">British Isles</Nav.Link>
                        <Nav.Link href="#">Europe</Nav.Link>
                        <Nav.Link href="#">Africa & Middle East</Nav.Link>
                      </Col>
                      <Col lg={2} md={4} className="menu-column">
                        <h5>EVENTS</h5>
                        <Nav.Link href="#">The Open</Nav.Link>
                        <Nav.Link href="#">Ryder Cup</Nav.Link>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </NavDropdown>

              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Tee Time Booking</Nav.Link>
              <NavDropdown
                title="About"
                id="about-mega-menu"
                show={showAbout}
                onMouseEnter={() => handleOpen(setShowAbout, aboutTimer)}
                onMouseLeave={() => handleClose(setShowAbout, aboutTimer)}
                className="mega-menu-trigger"
              >
                <div className="mega-menu-panel">
                  <Container>
                    <Row className="py-5">
                      <Col lg={6} className="pe-lg-5 border-end">
                        <div className="promo-image-box mb-4"></div>
                        <h3 className="promo-heading">Our Legacy</h3>
                        <p className="promo-subtext">Founded in 1984, we offer premium golf experiences.</p>
                      </Col>
                      <Col lg={6} className="ps-lg-5">
                        <h6 className="story-label">OUR STORY</h6>
                        <div className="story-links-list">
                          <Nav.Link href="#" className="story-nav-link">Our Mission</Nav.Link>
                          <Nav.Link href="#" className="story-nav-link">Meet the Team</Nav.Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="login-link" onClick={() => setShowLogin(true)}>
                Login
              </Nav.Link>
              <button className="signup-btn ms-lg-3" onClick={() => setShowSignup(true)}>
                Sign Up
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     <LoginModal 
  show={showLogin} 
  onHide={() => setShowLogin(false)} 
  onSwitch={openSignupCloseLogin} 
/>

      <SignUpModal 
        show={showSignup} 
        handleClose={() => setShowSignup(false)} 
        switchToLogin={openLoginCloseSignup}
      />
    </>
  );
}

export default NavBar;