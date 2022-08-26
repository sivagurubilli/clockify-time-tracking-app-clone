import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Timetrackermain from './timetracker/Timetrackermain';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      {/* <Route path='/login' element={ <Login /> } /> */}
      <Route path='/signup' element={ <Signup /> } />
      <Route path ="/timetrackermain/*" element={<Timetrackermain />}/>
    </Routes>
  )
}

export default MainRoutes
