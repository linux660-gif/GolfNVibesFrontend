import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PastEventsCards.css"

function PastEventsCards() {

  const PAST_EVENTS = [
    { id: 1, img: "day3.webp",hoverImg:"poster.webp", title: "Hello", description: "Im trying" },
    { id: 2, img: "Day1.webp", title: "Hello 2", description: "You are the best" },
    { id: 3, img: "day5.webp", title: "Hello 2", description: "You are the best" },
    { id: 4, img: "day3.webp", title: "Hello 2", description: "You are the best" },
    { id: 5, img: "day4.webp", title: "Hello 2", description: "You are the best" },
    { id: 6, img: "Day1.webp", title: "Hello 2", description: "You are the best" }
  ];

  return (
    <section className='pasteventcard-container'>
      <div className='pastcard-play'>
      {PAST_EVENTS.map((event) => (
        <Card key={event.id} className='pastcard'>
          <div className='img-wrapper'>
          <img src={event.img} alt={event.title} className='default-img' />
          <img src={event.hoverImg} className="hover-img" alt={event.title} />
          </div>
          
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </section>
  );
}

export default PastEventsCards;