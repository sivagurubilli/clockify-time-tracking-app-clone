import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from '../pages/Signup';
import Download from '../pages/Download';
import Featurespage from './Features';
import Features from './Features';

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
      <Route path="/features" element={<Featurespage/>}/>
      <Route path ="/download" element={<Download />}/>

      <Route path="timer-app" element={ <Timer /> } />
      <Route path="/timesheet-app" element={ <Timesheet /> } />
     
      <Route path ="/windows-time-tracking" element={<DesktopWin />}/>
      
      <Route path='/feature-list' element={ <Features /> } />


    </Routes>
  )
}

export default MainRoutes
