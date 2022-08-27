import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from '../pages/Signup';
import Download from '../pages/Download';

import Timetrackermain from './timetracker/Timetrackermain';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path ="/timetrackermain/*" element={<Timetrackermain />}/>
      <Route path ="/signup" element={<Signup />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/download" element={<Download />}/>

    </Routes>
  )
}

export default MainRoutes
