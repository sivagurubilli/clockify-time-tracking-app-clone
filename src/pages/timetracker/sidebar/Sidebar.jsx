import React from 'react'
import { useNavigate } from 'react-router-dom'

import timetracker from "../timetrackasset/timetrack.svg"
import dashboard from "../timetrackasset/dashboard.svg"
import reports from "../timetrackasset/reports.svg"
import calender from "../timetrackasset/calendar.svg"
import projects from "../timetrackasset/projects.svg"
import teams from "../timetrackasset/teams.svg"


import styles from "./sidebar.module.css"

const Sidebar = ({props}) => {



const navigate  = useNavigate()

  return (
    <div>
        <div>
{
props ? (
 <div className={styles.sidebarmain}>
 <div className={styles.sidebarsub}>
    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain")}>
        <img src ={timetracker} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Time Tracker</p>
    </div>


    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain/calender")}>
        <img src ={calender} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Calender</p>
    </div>

    <div className={styles.sidebardiv2}>
        <p className={styles.sidebarheading1}>ANALYSE</p>

    </div>
    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain/dashboards")}>
        <img src ={dashboard} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Dashboards</p>
    </div>
    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain/reports")}>
        <img src ={reports} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Reports</p>
    </div>

    <div className={styles.sidebardiv2}>
        <p className={styles.sidebarheading1}>MANAGE</p>

    </div>

    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain/projects")}>
        <img src ={projects} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Projects</p>
    </div>
    <div className={styles.sidebardiv1} onClick ={()=>navigate("/timetrackermain/teams")}>
        <img src ={teams} className={styles.sidebarimg} />
 <p className={styles.sidebarheading}>Teams</p>
    </div>
 </div>
 </div>

):(<div className={styles.siebarmain}>
<div className={styles.sidebarsub}>
 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain')}>
 <img src ={timetracker} className={styles.sidebarimg} />
 </div>
 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain/calender')}>
 <img src ={calender} className={styles.sidebarimg} />
 </div>

 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain/dashboards')}>
 <img src ={dashboard} className={styles.sidebarimg} />
 </div>

 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain/reports')}>
 <img src ={reports} className={styles.sidebarimg} />
 </div>

 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain/projects')}>
 <img src ={projects} className={styles.sidebarimg} />
 </div>

 <div className={styles.sidebardiv1toggle} onClick={()=>navigate('/timetrackermain/teams')}>
 <img src ={teams} className={styles.sidebarimg} />
 </div>
</div>

</div>)}
        </div>


    </div>
  )
}

export default Sidebar