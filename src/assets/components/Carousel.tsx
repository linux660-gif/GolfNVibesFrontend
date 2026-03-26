import { Carousel, Container } from 'react-bootstrap';
import './Carousel.css';

const HERO_SLIDES = [
  {
    id: 1,
    video: "golfhitting.mp4",
    title: <>YOU PLAY <span className="vibe-text"><i>GOLF</i></span></>,
    description: "From the first email to the 19th hole, we handle every detail so you focus on the game. We create custom golf trips for groups of all sizes, from buddies' weekends to corporate retreats.",
    cta: "BOOK YOUR TRIP"
  },
  {
    id: 2,
    video: "golf_in_target.mp4",
    title: <>WE HANDLE <span className="vibe-text"><i>EVERYTHING ELSE</i></span></>,
    description: "We handle every detail — tee times, accommodations, logistics — so your group shows up ready to play. From buddies' weekends to corporate retreats.",
      cta: "SPEAK TO AN EXPERT"
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
        controls={false}
        className="modern-carousel"
      >
        {HERO_SLIDES.map((slide) => (
          <Carousel.Item key={slide.id} className="vh-100">
            <div className="carousel-overlay"></div>
            
            <video 
              className="carousel-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>

            <Carousel.Caption className="d-flex align-items-center h-100">
              <Container>
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <div className="hero-actions">
                    <button className="btn-primary-golf">{slide.cta}</button>
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