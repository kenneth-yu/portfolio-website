import './App.css';
import Fullpage from './containers/fullpage'
import Mobilepage from './containers/mobilePage'
import {isMobileOnly} from 'react-device-detect';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_KEY, {debug: true});
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.location.hash });
  ReactGA.pageview(location.location.hash);
});

function App() {
  return (
    <Router history={history}>
      {isMobileOnly ? <Mobilepage/> : <Fullpage/>}
    </Router>
    
  );
}

export default App;
