import '../App.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Project from '../components/project'
import projectData from '../projectData.json'
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";

function Projects() {
      var settings = {
        dots: true,
        arrows: isMobile ? false : true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1
      };
    let parsedProjects = projectData.projects.map((oneProject, index) => <Project key={`project${index}`} isMobile={isMobile} projectData={oneProject}/>)
  return (
      <Container>
        <h1 style={{paddingLeft: isMobile ? 0 : "0.75em", textAlign: isMobile ? "center" : null}} className="headline-text">Projects</h1>
        <Slider style={{}} {...settings}>
            {parsedProjects}
        </Slider>
      </Container>
  );
}

export default Projects;
