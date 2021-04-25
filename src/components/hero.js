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
            <p>I talk to people and figure out what problem they are trying to solve. I then do the beeps and the boops until their problems go away.</p>
          </Col>
        </Row>
      </Container>
  );
}

export default Hero;
