import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs'; // You may need to install react-icons
import './GolfResorts.css';

const RESORTS = [
  {
    id: 1,
    name: "Sao Rafael Suites",
    location: "Algarve, Portugal",
    price: "319",
    tags: ["All Inclusive", "3 Nights"],
    img: "/sao-rafael.jpg"
  },
  {
    id: 2,
    name: "MacDonald Portal Hotel, Golf & Spa",
    location: "Cheshire",
    price: "99",
    tags: ["Stay & Play", "2 Course Venue", "1 Night"],
    img: "/macdonald.jpg"
  },
  {
    id: 3,
    name: "Cornelia Diamond Resort & Spa",
    location: "Turkey, Europe",
    price: "699",
    tags: ["Stay & Play", "5 Nights"],
    img: "/cornelia.jpg"
  }
];

const GolfResorts: React.FC = () => {
  return (
    <section className="resorts-section">
      <Container fluid className="px-lg-5">
        <Row className="align-items-center">
          {/* Left Text Column */}
          <Col lg={4} className="resorts-intro-text">
            <h2 className="display-5 fw-bold text-white mb-4">
              Explore Our Handpicked Golfing Resorts
            </h2>
            <p className="lead text-white-50 mb-5">
              We've selected our <strong>favourite golf resorts</strong>, each offering a unique 
              experience and exceptional amenities. Perfect for your next golf trip.
            </p>
            <Button className="btn-view-breaks">VIEW OUR FAVOURITE BREAKS</Button>
          </Col>

          {/* Right Cards Column */}
          <Col lg={8}>
            <div className="resorts-scroll-container">
              {RESORTS.map((resort) => (
                <div key={resort.id} className="resort-card">
                  <div className="resort-img-container">
                    <img src={resort.img} alt={resort.name} className="resort-img" />
                    
                    {/* Top Badges & Bookmark */}
                    <div className="card-top-overlay">
                      <div className="badge-group">
                        {resort.tags.map((tag, i) => (
                          <Badge key={i} className="resort-badge">{tag}</Badge>
                        ))}
                      </div>
                      <div className="bookmark-circle">
                        <BsBookmark />
                      </div>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="card-bottom-overlay">
                      <h3 className="resort-name">{resort.name}</h3>
                      <p className="resort-loc">{resort.location}</p>
                      
                      <div className="resort-footer">
                        <div className="price-block">
                          <span className="from-label">From</span>
                          <span className="price-value">£{resort.price}</span>
                          <span className="pp-label">pp</span>
                        </div>
                        <Button className="btn-view-details">VIEW DETAILS</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GolfResorts;