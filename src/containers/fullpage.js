import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Experience from '../components/experience';
import Wip from '../components/wip';


const anchors = ["introduction", "about-me", "experience", "work-in-progress"];
const navAnchors = ["Introduction", "About Me", "Experience", "Work in Progress"];

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
            <Experience/>
          </div>
          <div className="section">
            <Wip/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;