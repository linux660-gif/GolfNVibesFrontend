import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./About.css"

export default function AboutCard(){
    return (
    
      <Card  className='about-container' style={{ width: '18rem' }}>
      <Card.Img className= "about-image" variant="top" src="/public/golf_into_target.jpg" />
      <Card.Body className='about-body-section'>
        <Card.Title className='about-title'>Card Title</Card.Title>
        <Card.Text className='about-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="about-button" variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>


    );
}