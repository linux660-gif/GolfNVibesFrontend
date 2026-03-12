import Carousel from 'react-bootstrap/Carousel';
//import './Carousel.css'

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <video className="d-block w-100" controls loop autoPlay muted>
          <source src="golfhitting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption>
          <h3>Video Slide Label</h3>
          <p>Description for the video slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/*<Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="golf_into_target.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Image Slide Label</h3>
          <p>Description for the image slide.</p>
        </Carousel.Caption>
      </Carousel.Item>*/}

      
       <Carousel.Item interval={5000}>
        <video className="d-block w-100" controls loop autoPlay muted>
          <source src="golf_in_target.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption>
          <h3>Video Slide Label</h3>
          <p>Description for the video slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;