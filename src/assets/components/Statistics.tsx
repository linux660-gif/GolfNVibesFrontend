
import  { useEffect, useRef, useState } from "react";
import "./Statistics.css";

// Counter hook
const useCountUp = (end: number, startAnimation: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, startAnimation]);

  return count;
};

interface StatItemProps {
  icon: string;
  number: number;
  label: string;
  startAnimation: boolean;
}

const StatItem = ({ icon, number, label, startAnimation }: StatItemProps) => {
  const count = useCountUp(number, startAnimation);

  return (
    <div className="stat-item">
      <i className={`fa ${icon} stats-icon`}></i>
      <h2 className="stat-number">{count}</h2>
      <div className="stat-line"></div>
      <p className="stat-text">{label}</p>
    </div>
  );
};

const Statistics = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistic" className="stat-section" ref={ref}>
      <div className="stat-container">
        <div className="stat-grid">
          <StatItem icon="fa-coffee" number={999} label="Coffee Cups" startAnimation={visible} />
          <StatItem icon="fa-code" number={10000} label="Line Code" startAnimation={visible} />
          <StatItem icon="fa-clock-o" number={6} label="Years Experience" startAnimation={visible} />
          <StatItem icon="fa-laptop" number={12} label="Project" startAnimation={visible} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;

