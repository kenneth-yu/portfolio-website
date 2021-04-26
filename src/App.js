import './App.css';
import Fullpage from './containers/fullpage'
import Mobilepage from './containers/mobilepage'
import {isMobile} from 'react-device-detect';
 
function App() {
  return (
    <div>
      {isMobile ? <Mobilepage/> : <Fullpage/>}
    </div>
    
  );
}

export default App;
