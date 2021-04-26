import '../App.css';
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import pcImage1 from '../images/pcImage1.jpg'
import pcImage2 from '../images/pcImage2.jpg'
import pcImage3 from '../images/pcImage3.jpg'
import pcImage4 from '../images/pcImage4.jpg'
import {isMobile} from 'react-device-detect';


function AboutMe() {
    let carouselWidth = isMobile ? "d-block w-100" : "d-block w-75"
  return (
      <Container>
        <Row className="hero">
          <Col sm={6} >
          <h1 className="headline-text">About Me</h1>
            <p> Hi! My name is Kenneth Yu and for as long as I can remember I have always been someone who loved to tinker and modify things. 
                My love for technology really blossomed when I built my first computer at around age 10. 
                I still remember how excited I was researching every single part and figuring out what each component did specifically.
                Moving from building computers and understanding the hardware to software engineering really was a no brainer. 
                I simply needed to understand the magic behind double clicking an application on my desktop or opening up a website.
            </p>
            <p>Fast forward to today, I am extremely lucky to have had the opportunity to work at a handful of companies in vastly different fields.
                This really helps me bring a unique perpsective to engineering the best solution for both the client and the engineering team.
            </p>
            <p>Here are some of the technologies I am currently using: </p>
            <Row>
                <Col>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>Node.js</li>
                    <li>Tealium</li>
                </ul>
                </Col>
                <Col>
                    <ul>
                        <li>React/Redux</li>
                        <li>Express.js</li>
                        <li>Iterable Services</li>
                    </ul>
                </Col>
            </Row>
          </Col>
          <Col >
          <Carousel style={{paddingTop: isMobile ? 20 : 0}}>
            <Carousel.Item>
                <img
                className={carouselWidth}
                src={pcImage1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={carouselWidth}
                src={pcImage2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pcImage3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pcImage4}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
  );
}

export default AboutMe;
