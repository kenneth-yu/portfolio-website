import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Experience from '../components/experience';
import Wip from '../components/wip';
import Contact from '../components/contact';

function Mobilepage() {
    return (
        <div>
          <div style={{paddingTop: 20, paddingBottom: 30}}>
            <Hero/>
          </div>
          <hr />
          <div style={{paddingTop: 30, paddingBottom: 30}}>
            <AboutMe/>
          </div>
          <hr />
          <div style={{paddingTop: 30, paddingBottom: 30}}>
            <Experience/>
          </div>
          <hr />
          <div style={{paddingTop: 30, paddingBottom: 30}}>
            <Wip/>
          </div>
          <hr />
          <div style={{paddingTop: 60, paddingBottom: 60}}>
            <Contact/>
          </div>
        </div>
    );
  }
  
  export default Mobilepage;