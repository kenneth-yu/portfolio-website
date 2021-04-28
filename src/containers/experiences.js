import '../App.css';
import {Container, Row, Col, Tab, ListGroup} from 'react-bootstrap';
import {isMobileOnly} from 'react-device-detect';
import Experience from '../components/experience'
import ExperienceBtn from '../components/experienceBtn'
import projectData from '../projectData.json'

function Experiences() {
    const linkTag = (oneExperience) => {return oneExperience.linkTag ? oneExperience.linkTag : oneExperience.company.toLowerCase()}
    let parsedExperiences = projectData.experience.map((oneExperience, index) => <Experience key={`experience${index}`} linkTag={linkTag(oneExperience)} experienceData={oneExperience}/>)
    let parsedExperienceBtn = projectData.experience.map((oneExperience, index) => <ExperienceBtn key={`experienceBtn${index}`} linkTag={linkTag(oneExperience)} experienceData={oneExperience}/>)
    let defaultActiveKey = `#experience/${linkTag(projectData.experience[0])}`
  return (
      <Container className="centercenter">
        <Row style={{width: isMobileOnly ? "100%" : "75%"}}>
          <Col style={{alignItems: "center"}}>
            <h1 style={{paddingBottom: 25}} className="headline-text">Experience</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey={defaultActiveKey}>
            <Row>
                <Col sm={3} className="centercenter">
                <ListGroup style={{paddingBottom: isMobileOnly ? 15 : 0, textAlign: "center"}} horizontal={isMobileOnly}>
                    {parsedExperienceBtn}
                </ListGroup>
                </Col>
                <Col sm={9} >
                <Tab.Content >
                    {parsedExperiences}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
  );
}

export default Experiences;
