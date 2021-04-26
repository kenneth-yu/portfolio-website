import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Experience from '../components/experience';
import Wip from '../components/wip';

function Mobilepage() {
    return (
        <div>
          <div style={{paddingTop: 20}}>
            <Hero/>
          </div>
          <div style={{paddingTop: 60}}>
            <AboutMe/>
          </div>
          <div style={{paddingTop: 60}}>
            {/* <Experience/> */}
          </div>
          <div style={{paddingTop: 60}}>
            <Wip/>
          </div>
        </div>
    );
  }
  
  export default Mobilepage;