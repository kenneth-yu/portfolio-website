import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Projects from '../containers/projects';
import Experiences from '../containers/experiences';
import Contact from '../components/contact'
// import Wip from '../components/wip';


const anchors = ["", "about-me", "experience", "projects", "contact-me"];
const navAnchors = ["Introduction", "About Me", "Experience", "Projects", "Contact Me"];

const Fullpage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={navAnchors}
    licenseKey = {process.env.REACT_APP_FP_LICENSE_KEY}
    scrollingSpeed = {1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero/>
          </div>
          <div className="section">
            <AboutMe/>
          </div>
          <div className="section">
            <Experiences/>
          </div>
          <div className="section">
            <Projects/>
          </div>
          <div className="section">
            <Contact/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;