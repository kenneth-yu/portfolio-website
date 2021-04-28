import './App.css';
import Fullpage from './containers/fullpage'
import Mobilepage from './containers/mobilePage'
import {isMobileOnly} from 'react-device-detect';
 
function App() {
  return (
    <div>
      {isMobileOnly ? <Mobilepage/> : <Fullpage/>}
    </div>
    
  );
}

export default App;
