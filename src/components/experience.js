import '../App.css';
import {Container, Row, Col, Image, Tab, ListGroup} from 'react-bootstrap';
import profilePhoto from '../images/profilePhoto.png'

function Experience() {
  return (
      <Container className="centercenter">
        <Row style={{width: "75%"}}>
          <Col style={{alignItems: "center"}}>
            <h1 style={{paddingBottom: 25}} className="headline-text">Experience</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#priceline">
            <Row>
                <Col sm={3} className="centercenter">
                <ListGroup>
                    <ListGroup.Item action href="#priceline">
                    Priceline
                    </ListGroup.Item>
                    <ListGroup.Item action href="#mtb">
                    {"M&T Bank"}
                    </ListGroup.Item>
                    <ListGroup.Item action href="#verifyed">
                    Verifyed, Inc
                    </ListGroup.Item>
                    <ListGroup.Item action href="#starline">
                    Starline USA
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={9} >
                <Tab.Content>
                    <Tab.Pane eventKey="#priceline">
                      <span>Software Engineer </span><span className="subheadline-text">@ Priceline</span>
                      <h5>June 2019 - Present</h5>
                      <ul>
                        <li>Effectively engineering and developing multiple projects concurrently in a deadline driven environment.</li>
                        <li>Maintaining and introducing features to a white label platform that serves hundreds of Priceline partners.</li>
                        <li>Architecting and revising new or pre-existing middleware for optimal performance and results.</li>
                        <li>Collaborating with fellow engineers to implement desirable and applicable solutions.</li>
                        <li>Designing and integrating applications with practical content management platforms.</li>
                        <li>Preventing and swiftly responding to production issues by analyzing and rectifying detrimental bugs.</li>
                        <li>Actively initiating and participating in continuous improvement initiatives to enhance company processes.</li>
                        <li>Mentoring associate engineers to further develop their technical and functional skills.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#mtb">
                      <span> Associate Software Engineer </span><span className="subheadline-text">{"@ M&T Bank"}</span>
                      <h5>June 2017 - Nov 2018</h5>
                      <ul>
                        <li>Developed internal web applications for over 750 branches using C#, JavaScript, and ASP.NET</li>
                        <li>Analyzed deprecated bank acquisition applications and rejuvenated functionality with new features</li>
                        <li>Designed and optimized SQL servers with SQL Server Management Studio.</li>
                        <li>Effectively communicated with business clients to design, wireframe and engineer first-rate solutions.</li> 
                        <li>Updated and optimized application efficiency/workflow using whiteboards and Microsoft Visio.</li>
                        <li>Provided prompt post deployment support for in-house apps via troubleshooting and feature updates.</li>
                        <li>Interacted with clients using agile methodology for ideal solutions.</li>
                        <li>Created necessary documentation to prevent potential government regulation audits.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#verifyed">
                      <span> Front-End Developer (Internship) </span><span className="subheadline-text">{"@ Verifyed, Inc"}</span>
                      <h5>May 2016 - Aug 2016</h5>
                      <ul>
                        <li>Communicated efficiently with graphic designers to create front facing web pages using JavaScript, HTML/CSS, and Bootstrap.</li>
                        <li>Developed web pages to be dynamic and intuitive with all screen sizes including mobile devices.</li>
                        <li>Consulted with quality assurance to make revisions in a timely manner.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#starline">
                      <span> Systems Administration Intern </span><span className="subheadline-text">{"@ Starline USA"}</span>
                      <h5>Jan 2016 - May 2016</h5>
                      <ul>
                        <li>Seamlessly upgrade company systems to up to date operating systems and programs.</li>
                        <li>Aid in managing and upgrading network servers.</li>
                        <li>Assist in the set up virtualization on system networks.</li>
                        <li>Troubleshoot and resolve problems on the user side.</li>
                      </ul>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
  );
}

export default Experience;
