import { Carousel, Container } from 'react-bootstrap';
import './Carousel.css';

const HERO_SLIDES = [
  {
    id: 1,
    video: "golfhitting.mp4",
    title: <>MASTER YOUR <span className="vibe-text">SWING</span></>,
    description: "Data-driven insights to lower your handicap and increase your drive distance.",
    cta: "Start Analysis"
  },
  {
    id: 2,
    video: "golf_in_target.mp4",
    title: <>PRECISION <span className="vibe-text">PUTTING</span></>,
    description: "Every inch counts. Master the green with our advanced targeting technology.",
    cta: "Explore Clinics"
  }
];

const CarouselComponent = () => {
  return (
    <section className="hero-carousel-wrapper">
      <Carousel 
        fade 
        indicators={true} 
        interval={6000} 
        pause={false}
        className="modern-carousel"
      >
        {HERO_SLIDES.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="carousel-overlay"></div>
            
            <video 
              className="d-block w-100 carousel-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>

            <Carousel.Caption>
              <Container>
                <div className="glass-caption-box">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <div className="hero-actions">
                    <button className="signup-btn btn btn-success">{slide.cta}</button>
                    <button className="btn-outline-glass">Learn More</button>
                  </div>
                </div>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;