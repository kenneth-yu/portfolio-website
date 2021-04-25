import '../App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Wip() {
  return (
      <Container className="hero" >
        <Row>
            <h1 style={{color: '#ffffff', margin: 'auto'}}>Website is currently a work in progress.</h1>
        </Row>
        <Row>
            <h1 style={{color: '#ffffff', margin: 'auto'}}>Check back for more updates!</h1>
        </Row>
      </Container>
  );
}

export default Wip;
