import React from 'react'
import Navbar from './navbar/Navbar'
import { useState } from 'react'

import {Routes,Route} from "react-router-dom"
import Calender from './sidebar-components/Calender/Calender'
import Dashboards from './sidebar-components/dashboards/Dashboards'
import Sidebar from './sidebar/Sidebar'
import Reports from './sidebar-components/reports/Reports'
import Team from './sidebar-components/team/Team'
import Projects from './sidebar-components/projects/Projects'
import Timetracker from './timetrackermain/Timetrackerr'


const Timetrackermain = () => {

    const [toggle,settoggle] = useState(true)
 const togglenav =(x)=>{
    settoggle(x)
 }

  return (
    <div>

<Navbar props ={{toggle,togglenav}} />
<div style ={{display:"flex"}}>
<div style={toggle? {width:"20%"}:{width:"7%"}}>
    <Sidebar props ={toggle}/>
</div>
<div style={toggle ? {background:"#f2f6f8", width:"80%",marginTop:"50px",height:"100vh"}:{width:"90%",background:"#f2f6f8",marginTop:"50px",height:"100vh"}}>
    <Routes>
        <Route path ="/" element ={<Timetracker/>}/>
        <Route path ="/calender" element={<Calender/>} />
        <Route path ="/dashboards" element ={<Dashboards/>} />
        <Route path ="/projects" element ={<Projects/>} />
        <Route path ="/reports" element ={<Reports/>} />
        <Route path ="/teams" element={<Team />}     />

       
    </Routes>
</div>

</div>

    </div>
  )
}

export default Timetrackermain;