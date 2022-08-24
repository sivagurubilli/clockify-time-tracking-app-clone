import logo from './logo.svg';
import './App.css';
import Timetrackermain from './pages/timetracker/Timetrackermain';
import {Routes,Route} from "react-router-dom"
import Timetrackerr from './pages/timetracker/timetrackermain/Timetrackerr';
function App() {
  return (
    <div>
     
     <Routes>
      <Route path ="/timetrackermain/*" element={<Timetrackermain />}/>
      
     </Routes>
    </div>
  );
}

export default App;
