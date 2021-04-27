import '../App.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Project from '../components/project'
import projectData from '../projectData.json'
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";

function Projects() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1
      };
    let parsedProjects = projectData.projects.map((oneProject, index) => <Project key={`project${index}`}projectData={oneProject}/>)
  return (
      <Container>
        <h1 className="headline-text">Projects</h1>
        <Slider {...settings}>
            {parsedProjects}
        </Slider>
      </Container>
  );
}

export default Projects;
