import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from '../pages/Signup';

import Timetrackermain from './timetracker/Timetrackermain';
import { Timer } from '../components/HomePage/Features/Timer';
import { Timesheet } from '../components/HomePage/Features/Timesheet';
import { DesktopWin } from '../components/HomePage/DesktopWin';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path ="/timetrackermain/*" element={<Timetrackermain />}/>
      <Route path ="/signup" element={<Signup />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path="timer-app" element={ <Timer /> } />
      <Route path="/timesheet-app" element={ <Timesheet /> } />
     
      <Route path ="/windows-time-tracking" element={<DesktopWin />}/>
      
      {/* <Route path='feature-list' element={} /> */}

    </Routes>
  )
}

export default MainRoutes
