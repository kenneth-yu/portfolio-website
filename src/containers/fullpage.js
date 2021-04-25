import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';
import Wip from '../components/wip';


const anchors = ["Introduction", "Work-in-Progress", "thirdPage"];

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey = {process.env.FULL_PAGE_LICENSE_KEY}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero/>
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