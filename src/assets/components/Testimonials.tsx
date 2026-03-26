import "./Testimonials.css";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "This platform completely changed how we build products. Highly recommended!",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    text: "Beautiful UI and super easy to use. It saved us so much time.",
  },
  {
    name: "Michael Lee",
    role: "Developer",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    text: "The best developer experience I've had in years. Clean and powerful.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

 
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section
      className="testimonials"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="title-testimonials">Every Trip.Every Detail.Every Memory</h2>
      <p className="subtitle-testimonials">We don't just book tee times — we create experiences that groups talk about for years.</p>

      <div className="carousel-testimonials">
        <div
          className="track-testimonials"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <div className="card-testimonials" key={i}>
              <img src={item.image} alt={item.name} />

              <p className="text-testimonials">“{item.text}”</p>

              <div className="stars">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>

        
        <button className="arrow-testimonials left" onClick={prevSlide}>‹</button>
        <button className="arrow-testimonials right" onClick={nextSlide}>›</button>
      </div>

     
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}