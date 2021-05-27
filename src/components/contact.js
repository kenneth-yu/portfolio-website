import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ReactGA from 'react-ga';

let trackEmailClick = () =>{
  ReactGA.event({
    category: "Contact Me",
    action: "User tried to contact me",
  });
}

function Contact() {
  return (
      <Container>
        <Row className="centercenter">
          <Col style={{textAlign: "center"}} sm={6} >
            <h1 className="headline-text">Contact Me</h1>
            <p style={{paddingBottom: 20}}>Although I am not actively searching for new opportunities, I am always open for suggestions. 
                Feel free to send me a message using the button below or by emailing me at mail@kennethyu.dev. <br/> I will try my best to get back to you as soon as possible. Thanks for visiting my website!
            </p>
            <Button onClick={() => trackEmailClick()} style={{padding:"15px 40px 15px 40px"}} href={`mailto:mail@kennethyu.dev`} variant="outline-light">Email Me</Button>{' '}
          </Col>
        </Row>
      </Container>
  );
}

export default Contact;
