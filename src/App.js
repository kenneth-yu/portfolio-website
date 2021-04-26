import './App.css';
import Fullpage from './containers/fullPage'
import Mobilepage from './containers/mobilePage'
import {isMobile} from 'react-device-detect';

function App() {
  return (
    <div>
      {isMobile ? <Mobilepage/> : <Fullpage/>}
    </div>
    
  );
}

export default App;
