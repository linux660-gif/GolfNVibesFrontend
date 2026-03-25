import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { 
  BsShieldLock, BsPhone, BsCreditCard, 
  BsPaypal, BsCheckCircleFill, BsDownload, 
  BsEnvelopeCheck, BsChevronLeft, BsChevronRight 
} from 'react-icons/bs';
import "./UpcomingEvents.css";

const images = [
  "https://images.unsplash.com/photo-1592919505780-303950717480",
  "https://images.unsplash.com/photo-1603575448360-153f093fd0b1",
  "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
];

export default function UpcomingEvents() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [method, setMethod] = useState("mpesa");
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(auto);
  }, []);

  const handleConfirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const resetModal = () => {
    setShowModal(false);
    setTimeout(() => setStep(1), 500);
  };

  return (
    <section className="upcoming-hero">
      {/* Main Banner matching Screenshot */}
      <div className="hero-banner-container" style={{ backgroundImage: `url(${images[index]})` }}>
        <div className="hero-overlay">
          <button className="slider-arrow left" onClick={() => setIndex((index - 1 + images.length) % images.length)}>
            <BsChevronLeft />
          </button>
          <button className="slider-arrow right" onClick={() => setIndex((index + 1) % images.length)}>
            <BsChevronRight />
          </button>

          <div className="hero-content-wrapper">
            <h4 className="location-subtitle">Nairobi, Kenya</h4>
            <h1 className="main-hero-title">ALL INCLUSIVE<br/>GOLF HOLIDAYS</h1>
            
            <div className="feature-tags">
              <span>Championship Golf</span>
              <span>5 Star Resorts</span>
              <span>Transfers Included</span>
              <span>Ultra All Inclusive</span>
            </div>

            <div className="hero-footer-info">
              <div className="booking-urgency">
                <h3>Book early for</h3>
                <h2>Autumn 2026</h2>
                <p className="see-all">See all offers {'>'}</p>
              </div>
              <button className="book-now-pill" onClick={() => setShowModal(true)}>
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="slider-dots">
            {images.map((_, i) => (
              <span key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)}></span>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal show={showModal} onHide={resetModal} centered size="lg" className="checkout-modal">
        <Modal.Body className="p-0">
          <Row className="g-0">
            {step < 3 && (
              <Col md={4} className="checkout-summary-sidebar d-none d-md-flex">
                <div className="summary-content">
                  <h5 className="text-uppercase tracking-widest small opacity-75">Your Booking</h5>
                  <div className="event-mini-card">
                    <img src={images[index]} alt="Golf" />
                    <div className="pt-2">
                      <strong className="d-block">Nairobi Golf Retreat</strong>
                      <span className="small text-white-50">June 12–16, 2026</span>
                    </div>
                  </div>
                  <hr className="border-secondary my-4" />
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small text-white-50">Total Amount:</span>
                    <span className="fw-bold">$1,200</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="trust-badge">
                      <BsShieldLock className="me-2" />
                      <span>256-bit SSL Secure</span>
                    </div>
                  </div>
                </div>
              </Col>
            )}

            <Col md={step === 3 ? 12 : 8} className="p-4 p-lg-5 position-relative bg-white">
              <button className="close-x-btn" onClick={resetModal}>✕</button>
              
              {step < 3 && (
                <div className="checkout-header mb-4">
                  <div className={`step-indicator ${step === 1 ? 'active' : 'done'}`}>1</div>
                  <div className="step-line"></div>
                  <div className={`step-indicator ${step === 2 ? 'active' : ''}`}>2</div>
                </div>
              )}

              {step === 1 && (
                <div className="fade-in">
                  <h3 className="fw-bold mb-1">Select Payment</h3>
                  <p className="text-muted small mb-4">Choose your preferred method.</p>
                  
                  <div className="method-grid">
                    <div className={`method-card ${method === 'mpesa' ? 'selected' : ''}`} onClick={() => setMethod('mpesa')}>
                      <BsPhone className="icon" />
                      <span>M-Pesa</span>
                    </div>
                    <div className={`method-card ${method === 'card' ? 'selected' : ''}`} onClick={() => setMethod('card')}>
                      <BsCreditCard className="icon" />
                      <span>Card</span>
                    </div>
                    <div className={`method-card ${method === 'paypal' ? 'selected' : ''}`} onClick={() => setMethod('paypal')}>
                      <BsPaypal className="icon" />
                      <span>PayPal</span>
                    </div>
                  </div>

                  <Form.Group className="mt-4">
                    <Form.Label className="small fw-bold">Full Name</Form.Label>
                    <Form.Control type="text" className="checkout-input" placeholder="Enter name on booking" />
                  </Form.Group>

                  <Button className="w-100 btn-checkout-action mt-4" onClick={() => setStep(2)}>
                    Continue to {method === 'mpesa' ? 'Instructions' : 'Payment'}
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="fade-in">
                  <h3 className="fw-bold mb-1">Finalize Payment</h3>
                  {method === 'mpesa' ? (
                    <div className="mpesa-flow mt-3">
                      <div className="instruction-step">
                        <span className="num">1</span>
                        <p>Paybill: <strong>400200</strong></p>
                      </div>
                      <div className="instruction-step">
                        <span className="num">2</span>
                        <p>Account: <strong>RETREAT26</strong></p>
                      </div>
                      <Form.Group className="mt-4 pt-2 border-top">
                        <Form.Label className="small fw-bold text-primary">Transaction Code</Form.Label>
                        <Form.Control type="text" className="checkout-input-lg" placeholder="ABC123XYZ" />
                      </Form.Group>
                    </div>
                  ) : (
                    <div className="mt-3">
                       <Form.Control type="text" className="checkout-input mb-3" placeholder="Card Number" />
                       <Row>
                         <Col><Form.Control type="text" className="checkout-input" placeholder="MM/YY" /></Col>
                         <Col><Form.Control type="text" className="checkout-input" placeholder="CVC" /></Col>
                       </Row>
                    </div>
                  )}

                  <div className="d-flex gap-2 mt-4">
                    <Button variant="light" className="flex-grow-1" onClick={() => setStep(1)} disabled={loading}>Back</Button>
                    <Button className="btn-checkout-action flex-grow-2" onClick={handleConfirmPayment} disabled={loading}>
                      {loading ? "Verifying..." : `Pay $1,200`}
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="success-state text-center py-4 fade-in">
                  <div className="success-icon-wrapper">
                    <BsCheckCircleFill className="text-success display-2" />
                  </div>
                  <h2 className="fw-bold mt-4">Booking Confirmed!</h2>
                  <p className="text-muted">Your transaction was successful. Check your email for the itinerary.</p>
                  
                  <div className="success-summary-box mt-4">
                    <div className="d-flex justify-content-between mb-2"><span>Order Ref:</span><strong>#GV-88291</strong></div>
                    <div className="d-flex justify-content-between"><span>Status:</span><span className="text-success fw-bold">Success</span></div>
                  </div>

                  <div className="mt-5 d-flex flex-column gap-2">
                    <Button className="btn-checkout-action" onClick={resetModal}>
                      <BsEnvelopeCheck className="me-2" /> View Confirmation
                    </Button>
                    <Button variant="link" className="text-muted text-decoration-none">
                      <BsDownload className="me-2" /> Download Receipt
                    </Button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </section>
  );
}