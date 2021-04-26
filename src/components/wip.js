import '../App.css';
import {Container, Row, Col} from 'react-bootstrap';

function Wip() {
  return (
      <Container>
        <Row >
            <Col sm={12} style={{textAlign: "center"}}>
                <h1 style={{color: '#ffffff'}}>Website is currently a work in progress.</h1>
                <h1 style={{color: '#ffffff'}}>Check back for more updates!</h1>
            </Col>
        </Row>
      </Container>
  );
}

export default Wip;
