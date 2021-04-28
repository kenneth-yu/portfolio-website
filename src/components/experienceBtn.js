import '../App.css';
import {ListGroup} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
function ExperienceBtn(props) {
  let experienceData = props.experienceData
  return (
    <ListGroup.Item action href={`#experience/${props.linkTag}`}>
    {isMobile ? experienceData.mobileName || experienceData.company : experienceData.company}
    </ListGroup.Item>
  );
}

export default ExperienceBtn;
