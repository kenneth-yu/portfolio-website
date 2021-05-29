import './App.css';
import Fullpage from './containers/fullpage'
import Mobilepage from './containers/mobilePage'
import {isMobileOnly} from 'react-device-detect';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_KEY, {debug: true});
let landingUrl = isMobileOnly ? `/mobile${window.location.pathname === '/' ? '' : window.location.pathname}` : window.location.pathname
ReactGA.pageview(landingUrl);
ReactGA.set({page: landingUrl})
const history = createBrowserHistory();

history.listen(location => {
  let currentUrl = isMobileOnly ? `/mobile${location.location.hash}` : location.location.hash
  ReactGA.set({ page: currentUrl });
  ReactGA.pageview(currentUrl);
});

function App() {
  return (
    <Router history={history}>
      {isMobileOnly ? <Mobilepage/> : <Fullpage/>}
    </Router>
    
  );
}

export default App;
