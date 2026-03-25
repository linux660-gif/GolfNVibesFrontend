import React, { useEffect, useRef } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "./PastEventsCards.css";

const PAST_EVENTS = [
  { id: 1, img: "day3.webp", hoverImg: "poster.webp", title: "St Andrews Open", description: "A legendary week at the Home of Golf." },
  { id: 2, img: "Day1.webp", hoverImg: "day5.webp", title: "Kenya Safari Golf", description: "Wilderness meets the fairway in Nairobi." },
  { id: 3, img: "day5.webp", hoverImg: "day3.webp", title: "Moroccan Nights", description: "Luxury golf under the Atlas Mountains." },
  { id: 4, img: "day3.webp", hoverImg: "Day1.webp", title: "Cape Town Classic", description: "Coastal breeze and championship holes." },
  { id: 5, img: "day4.webp", hoverImg: "day5.webp", title: "European Tour", description: "Exploring the finest greens in Portugal." },
  { id: 6, img: "Day1.webp", hoverImg: "day4.webp", title: "Dubai Invitational", description: "High-stakes golf in the heart of the desert." }
];

const PastEventsCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.pastcard-wrapper');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='past-events-section'>
      <Container>
        <div className="section-header text-center mb-5">
          <h6 className="section-subtitle">GALLERY</h6>
          <h2 className="section-title">Past <span className="vibe-text-dark">Experiences</span></h2>
        </div>

        <div className='pastcard-grid'>
          {PAST_EVENTS.map((event, index) => (
            <div 
              key={event.id} 
              className='pastcard-wrapper' 
              style={{ transitionDelay: `${index * 100}ms` }} /* Staggered effect */
            >
              <Card className='pastcard-custom'>
                <div className='img-reveal-container'>
                  <Card.Img src={event.img} className='default-img' />
                  <div className="hover-overlay">
                    <img src={event.hoverImg} className="hover-img" alt={event.title} />
                  </div>
                  <div className="card-badge">Past Event</div>
                </div>
                
                <Card.Body>
                  <Card.Title className="event-card-title">{event.title}</Card.Title>
                  <Card.Text className="event-card-text">{event.description}</Card.Text>
                  <Button className="btn-learn-more">View Experience</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PastEventsCards;