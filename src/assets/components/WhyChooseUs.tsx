import "./WhyChooseUs.css";

const Feature = ({ title, text, img, reverse = false }: { title: string; text: string; img: string; reverse?: boolean }) => {
  return (
    <div className={`feature ${reverse ? "reverse" : ""}`}>
      <div className="feature-image">
        <img src={img} alt={title} />
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <h2 className="title">Why to choose US?</h2>

      <Feature
        title="Comprehensive range of golf packages"
        text="We offer thousands of golf breaks across the UK and overseas, so there’s something for every player. From short weekend getaways to week-long trips, we match courses, accommodation and transfers to your schedule and budget. Tell us your dates and we’ll show you the best options."
        img="https://picsum.photos/400/240"
      />

      <Feature
        title="Customised itineraries"
        text="Tell us how you like to play and we’ll build your schedule around that. Whether you want coaching, group play or a relaxed social trip, we’ll organise transport, dining and tee times to suit."
        img="https://picsum.photos/400/240"
        reverse
      />

      <Feature
        title="Expert knowledge and support"
        text="You come first. Our team knows courses, travel logistics and local tips, so you get clear advice every step of the way. We handle bookings, tee times and special requests and we’re only a call or email away if you want to talk through the plan."
        img="https://picsum.photos/400/240"
      />

      <Feature
        title="Comprehensive range of packages"
        text="Choose from packages at different price points to suit solo players, couples or groups. We aim for straightforward booking, clear communication and quick fixes if plans change. If something isn’t right, we will put it right."
        img="https://picsum.photos/400/240"
        reverse
      />
    </div>
  );
};

export default WhyChooseUs;
