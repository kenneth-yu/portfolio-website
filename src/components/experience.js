import '../App.css';
import {Tab} from 'react-bootstrap';
import {isMobileOnly} from 'react-device-detect';

function Experience(props) {
    let experienceData = props.experienceData
    let parsedDescription = experienceData.description.map((oneBullet, index) => {return <li key={`${props.linkTag}${index}`}>{oneBullet}</li>})
  return (
    <Tab.Pane eventKey={`#experience/${props.linkTag}`}>
        <span>{experienceData.jobTitle}</span>
        {isMobileOnly ? <br />: null}
        <span className="subheadline-text">{` @ ${experienceData.company}`}</span>
        <h5>{experienceData.jobDates}</h5>
        <ul style={{paddingLeft: isMobileOnly ? "10px" : "20px"}}>
            {parsedDescription}
        </ul>
    </Tab.Pane>
  );
}

export default Experience;
