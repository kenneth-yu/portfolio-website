import '../App.css';
import {Col, Card, Button} from 'react-bootstrap';
import ReactGA from 'react-ga';


function Project(props) {
  const clickHandler = (projectData) => {
    ReactGA.event({
      category: "Github Click",
      action: `User clicked on ${projectData.title}`,
    });
    window.open(projectData.link, '_blank');
  }

  return (
    <Col className="cardCol">
      <Card style={{ maxWidth: '18rem', height: '37rem'}}>
        <Card.Img variant="top" style={{ height: 250}} src={props.projectData.image}/>
        <Card.Body>
          <Card.Title><b>{props.projectData.title}</b></Card.Title>
          <Card.Text>
            {props.projectData.description}
          </Card.Text>
          <Button className="githubButton" style={{textAlign: "center"}} variant="primary" onClick={() => clickHandler(props.projectData)}>Github Link</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
