import { useEffect, useRef, useState } from "react";
import "./Statistics.css";

// Enhanced Counter hook with Easing
const useCountUp = (end: number, startAnimation: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    const duration = 2500; // 2.5 seconds for a premium feel

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easeOutProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, startAnimation]);

  return count;
};

interface StatItemProps {
  icon: string;
  number: number;
  label: string;
  suffix?: string;
  startAnimation: boolean;
}

const StatItem = ({ icon, number, label, suffix = "", startAnimation }: StatItemProps) => {
  const count = useCountUp(number, startAnimation);

  return (
    <div className={`stat-card ${startAnimation ? 'animate-in' : ''}`}>
      <div className="icon-box">
         <i className={`fa-solid ${icon}`}></i>
      </div>
      <div className="stat-info">
        <h2 className="stat-number">
          {count.toLocaleString()}{suffix}
        </h2>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

const Statistics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics-wrapper" ref={sectionRef}>
      <div className="container">
        <div className="stat-grid">
          <StatItem icon="fa-flag" number={450} label="Championship Courses" startAnimation={visible} />
          <StatItem icon="fa-earth-africa" number={40} suffix="+" label="Global Destinations" startAnimation={visible} />
          <StatItem icon="fa-users" number={15000} label="Happy Golfers" startAnimation={visible} />
          <StatItem icon="fa-trophy" number={120} label="Major Tournaments" startAnimation={visible} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;