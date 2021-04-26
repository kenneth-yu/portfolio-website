import '../App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import profilePhoto from '../images/profilePhoto.png'

function Hero() {
  return (
      <Container>
        <Row className="hero">
          <Col sm={6} >
            <Image fluid src={profilePhoto} rounded />
          </Col>
          <Col sm={6}>
            <h1 className="headline-text">Hi, My Name is Kenny.</h1>
            <h1 className="headline-text">I'm a Software Engineer.</h1>
            <p>Based out of New York City, I specialize in building exceptional digital experiences by focusing on user centric products.
                I am currently a front-end engineer at <a href="www.priceline.com">Priceline</a> determined to help customers experience memorable moments that matter the most.
            </p>
          </Col>
        </Row>
      </Container>
  );
}

export default Hero;
