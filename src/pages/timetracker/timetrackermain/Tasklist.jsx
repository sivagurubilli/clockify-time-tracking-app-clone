import React from 'react'
import styles from "./tasklist.module.css"
import {useDispatch} from "react-redux"

import plus from "../timetrackasset/plus-blue.svg"
import  tag from "../timetrackasset/tag-gray.svg"
import options from "../timetrackasset/menuoption.svg"
import play from "../timetrackasset/play.svg"
import calender from "../timetrackasset/calendar-gray.svg"

const Tasklist = ({e}) => {
  const dispatch = useDispatch();
    function mstotime(duration) {
        var milliseconds = parseInt((duration % 1000));
             var seconds = parseInt((duration / 1000) % 60);
            var minutes = parseInt((duration / (1000 * 60)) % 60);
           var  hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds
 
    }

    
        return (
    <div>
     <div style ={{display:"flex",justifyContent:"space-between",padding:"5px 10px"}}>
        <p style ={{fontSize:"12px",color:"#9c9c9c"}}>Today</p>
    <div style ={{fontSize:"12px",display:"flex",aligItems:"center",color:"#9c9c9c"}}>Total:<p>{mstotime(e.timediff)}
    </p>
    </div>
     </div>
    <div className={styles.timetrackmain}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
            <div style={{fontSize:"14px" ,padding:"0px 30px"}}>{e.title}</div>
        
        <div className={styles.timetrackright}>
            <img src ={plus} alt = "error" />
         <p style={{color:"#03a9f4",marginRight:"1.5vw"}}>Project</p>
        
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: 'fit-content' }}>
                        <div style={{ borderRight: '1px solid #e4eaee', borderLeft: '1px solid #e4eaee', padding: '5px 20px' }}>
                            <img src={tag} alt="error" />
                        </div>
                        <div style={{ borderRight: '1px solid #e4eaee', fontSize: '20px', color: '#999999', margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}>$</div>
                        <div style={{ display: "flex", gap: '10px', margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 30px' }}>
                            <p>{e.starttime}</p>
                            <p>-</p>
                            <p>{e.endtime}</p>
                        </div>
                        <div style={{ margin: '0px', padding: '0px 20px' }}> <img src={calender} alt="error" width="20px" height="20px" /></div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px', fontWeight: '600', fontSize: '18px' }}>{mstotime(e.timediff)}</div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}> <img src={play} alt="error" width="20px" height="20px" /></div>
                        <div style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 20px' }}><img src={options} alt="error" width="30px" height="30px"/></div>
                    </div>
                
        </div>
    </div>


    </div>
  )
}

export default Tasklist