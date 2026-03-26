import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './TripRequestForm.css';

const TripRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    groupSize: '',
    budget: '',
    tripType: '',
    destination: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="trip-request-section">
     <Container>
      <div className="trip-header-content">
      <h2 className="trip-request-title">LET'S BUILD YOUR PERFECT TRIP</h2>
      <p className="trip-request-subtitle">
        Tell us about your group and we'll put together a custom package 
        within 48 hours. No commitment required.
      </p>
    </div>
        <div className="form-wrapper-inner">
          <Form onSubmit={handleSubmit} className="premium-golf-form">
            <Row className="gy-4">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label className="label-accent">YOUR NAME *</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith" 
                    className="input-golf-dark" 
                    required 
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="label-accent">EMAIL ADDRESS *</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com" 
                    className="input-golf-dark" 
                    required 
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formGroupSize">
                  <Form.Label className="label-accent">GROUP SIZE *</Form.Label>
                  <Form.Select 
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="input-golf-dark form-select-custom" 
                    required
                  >
                    <option value="" disabled>Select group size</option>
                    <option value="1">Solo Golfer</option>
                    <option value="2">Duo / Twosome</option>
                    <option value="3">Threesome</option>
                    <option value="4-8">Small Group (4-8)</option>
                    <option value="8+">Large Group (8+)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group controlId="formBudget">
                  <Form.Label className="label-accent">BUDGET PER PERSON *</Form.Label>
                  <Form.Select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-golf-dark form-select-custom" 
                    required
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="economy">Economy (&lt;$2000)</option>
                    <option value="mid-range">Mid-Range ($2000 - $4000)</option>
                    <option value="luxury">Luxury ($4000 - $7000)</option>
                    <option value="elite">Elite ($7000+)</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formTripType">
                  <Form.Label className="label-accent">TRIP TYPE *</Form.Label>
                  <Form.Select 
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="input-golf-dark form-select-custom" 
                    required
                  >
                    <option value="" disabled>Select trip type</option>
                    <option value="leisure">Leisure & Sightseeing</option>
                    <option value="competitive">Competitive / Tournament</option>
                    <option value="corporate">Corporate / Business Event</option>
                    <option value="buddies">Buddies Trip / Guys Getaway</option>
                    <option value="couples">Couples Retreat</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group controlId="formDestination">
                  <Form.Label className="label-accent">PREFERRED DESTINATION</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Scottsdale, flexible, anywhere..." 
                    className="input-golf-dark" 
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group controlId="formMessage">
                  <Form.Label className="label-accent">ANYTHING ELSE WE SHOULD KNOW?</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    placeholder="Tell us about your ideal trip, special requests, or questions..." 
                    className="input-golf-dark" 
                  />
                </Form.Group>
              </Col>
              
              <Col md={12} className="text-center mt-5">
                <button type="submit" className="btn-trip-submit">
                  SEND MY TRIP REQUEST
                </button>
                <p className="form-subtext small mt-3">
                  We'll respond within 48 hours · No commitment required
                </p>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default TripRequestForm;