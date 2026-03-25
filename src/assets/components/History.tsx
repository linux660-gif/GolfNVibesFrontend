import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './History.css';

const History: React.FC = () => {
  return (
    <section className="history-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Story & Content */}
          <Col lg={6} className="history-text-content">
            <h6 className="section-subtitle">ESTABLISHED 1984</h6>
            <h2 className="history-title">
              Our Legacy in <span className="vibe-text-dark">Global Golf</span>
            </h2>
            <div className="history-accent-line"></div>
            
            <p className="history-lead">
              For over four decades, Golf N Vibes has been the premier architect of 
              extraordinary golf travel experiences.
            </p>
            
            <p className="history-description">
              What started as a small club in Scotland has evolved into a global 
              concierge service. We combine world-class play on iconic fairways with 
              boutique accommodations and local cultural immersion. From the 
              windswept dunes of St Andrews to the lush greens of South Africa, 
              we don't just book trips—we craft legacies.
            </p>

            <div className="history-stats">
              <div className="stat-item">
                <span className="stat-number">40+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Continents</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1984</span>
                <span className="stat-label">Founded</span>
              </div>
            </div>
          </Col>

          {/* Right Side: Modern Image Collage */}
          <Col lg={6} className="history-image-wrapper">
            <div className="main-image-container">
              <img 
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=800&q=80" 
                alt="Vintage Golf Club" 
                className="img-fluid main-history-img"
              />
              <div className="floating-card">
                <p>"The best way to see the world is one fairway at a time."</p>
                <strong>— The Founder</strong>
              </div>
            </div>
            <div className="secondary-image-accent"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default History;