import "./UpcomingEvents.css";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1592919505780-303950717480",
  "https://images.unsplash.com/photo-1603575448360-153f093fd0b1",
  "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export default function UpcomingEvents() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });
  const [payment, setPayment] = useState("mpesa");

  
  useEffect(() => {
    const target = new Date("2026-06-12").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section className="upcoming-events">
      <div className="upcoming-events-container">
        <div className="upcoming-events-content">
          <h1 className="upcoming-events-title">
            🏌️ Nairobi Golf Travel Retreat
          </h1>

          <p className="upcoming-events-description">
            Experience luxury golf, elite networking, and unforgettable moments
            in Kenya’s premier golf destination.
          </p>
          <div className="upcoming-events-countdown">
            <div>
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <p>Min</p>
            </div>
          </div>
          <div className="upcoming-events-details">
            <p>📅 June 12–16, 2026</p>
            <p>📍 Nairobi Golf Club</p>
            <p>💰 $1,200 All Inclusive</p>
          </div>
          <div className="upcoming-events-attendees">
            <img src="https://i.pravatar.cc/40?img=1" />
            <img src="https://i.pravatar.cc/40?img=2" />
            <img src="https://i.pravatar.cc/40?img=3" />
            <span>+17 attending</span>
          </div>

          <button
            className="upcoming-events-primary-btn"
            onClick={() => setShowModal(true)}
          >
            Book Your Spot
          </button>
        </div>

        <div className="upcoming-events-image">
          <img src={images[index]} alt="golf" />
        </div>

      </div>
      {showModal && (
        <div className="upcoming-events-modal">
          <div className="upcoming-events-modal-content">
            <h2>Book Your Spot</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Tickets" />
            <div className="upcoming-events-payments">
              <button
                className={payment === "mpesa" ? "active" : ""}
                onClick={() => setPayment("mpesa")}
              >
                M-Pesa
              </button>
              <button
                className={payment === "card" ? "active" : ""}
                onClick={() => setPayment("card")}
              >
                Card
              </button>
              <button
                className={payment === "paypal" ? "active" : ""}
                onClick={() => setPayment("paypal")}
              >
                PayPal
              </button>
            </div>

            <button className="upcoming-events-pay-btn">Proceed to Payment</button>

            <button
              className="upcoming-events-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}