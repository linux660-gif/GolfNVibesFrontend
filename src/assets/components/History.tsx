import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./History.css"

export default function HistoryCard(){
    return (
    
      <Card  className='history-container' style={{ width: '18rem' }}>
      <Card.Img className= "history-image" variant="top" src="/public/golf_into_target.jpg" />
      <Card.Body className='history-body-section'>
        <Card.Title className='history-title'>Card Title</Card.Title>
        <Card.Text className='history-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="history-button" variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>


    );
}