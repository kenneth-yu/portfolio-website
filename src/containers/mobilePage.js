import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Experiences from '../containers/experiences';
import Projects from '../containers/projects';
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
            <Experiences/>
          </div>
          <hr />
          {/* <div style={{paddingTop: 30, paddingBottom: 30}}>
            <Projects/>
          </div> */}
          <hr />
          <div style={{paddingTop: 60, paddingBottom: 60}}>
            <Contact/>
          </div>
        </div>
    );
  }
  
  export default Mobilepage;