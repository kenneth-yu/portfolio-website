import '../App.css';
import {Container} from 'react-bootstrap';
import Project from '../components/project'
import projectData from '../projectData.json'
import {isMobileOnly, isTablet} from 'react-device-detect';
import Slider from "react-slick";

function Projects() {
    let slidesToShow
    if(isMobileOnly){
        slidesToShow = 1
    }
    else if(isTablet){
        slidesToShow = 2
    }
    else{
        slidesToShow = 3
    }
      var settings = {
        dots: true,
        arrows: isMobileOnly ? false : true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };
    let parsedProjects = projectData.projects.map((oneProject, index) => <Project key={`project${index}`} isMobile={isMobileOnly} projectData={oneProject}/>)
  return (
      <Container>
        <h1 style={{paddingLeft: isMobileOnly ? 0 : "0.75em", textAlign: isMobileOnly ? "center" : null}} className="headline-text">Projects</h1>
        <Slider style={{}} {...settings}>
            {parsedProjects}
        </Slider>
      </Container>
  );
}

export default Projects;
