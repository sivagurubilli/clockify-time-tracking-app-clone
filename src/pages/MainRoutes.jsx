import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Timetrackermain from './timetracker/Timetrackermain';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path ="/timetrackermain/*" element={<Timetrackermain />}/>
    </Routes>
  )
}

export default MainRoutes
