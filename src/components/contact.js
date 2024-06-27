import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ReactGA from 'react-ga';
import {isMobileOnly} from 'react-device-detect';

let trackEmailClick = () =>{
  let emailBtn = document.getElementById('email-btn')
  let emailBtnText = emailBtn.innerText
  navigator.clipboard.writeText('mail@kennethyu.dev');
  if(emailBtn.innerText !== 'Email Copied'){
    emailBtn.innerText = 'Email Copied'
    setTimeout(() => {emailBtn.innerText = emailBtnText}, 1500)
  }
  ReactGA.event({
    category: `${isMobileOnly ? 'mobile_contact_me':'contact_me'}`,
    action: `User tried to contact me${isMobileOnly ? ' via mobile' : ''}`,
  });
}

function Contact() {
  return (
      <Container>
        <Row className="centercenter">
          <Col style={{textAlign: "center"}} sm={6} >
            <h1 className="headline-text">Contact Me</h1>
            <p style={{paddingBottom: 20}}>Although I am not actively searching for new opportunities, I am always open for suggestions. 
                Feel free to send me a message using the button below or by emailing me at <span className="gradient-text">mail@kennethyu.dev</span>. <br/> I will try my best to get back to you as soon as possible. Thanks for visiting my website!
            </p>
            <Button id="email-btn" onClick={() => trackEmailClick()} style={{padding:"15px 40px 15px 40px"}} href={`mailto:mail@kennethyu.dev`} variant="outline-light">Email Me</Button>{' '}
          </Col>
        </Row>
      </Container>
  );
}

export default Contact;
