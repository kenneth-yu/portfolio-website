import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';

const anchors = ["Introduction", "secondPage", "thirdPage"];

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey = {'process.env.FULL_PAGE_LICENSE_KEY'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero/>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;