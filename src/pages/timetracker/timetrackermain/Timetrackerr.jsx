import React from 'react'
import {useRef,useState} from "react"
import styles from "./timetracker.module.css"
import tag from "../timetrackasset/tag-gray.svg"
import plus from "../timetrackasset/plus-blue.svg"
import clock from "../timetrackasset/clock-blue.svg"
import list from "../timetrackasset/list-blue.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addtasks, gettasks, removetask, updatetasks } from '../../../redux/tasktimereducer/action'
import Tasklist from './Tasklist'


const Timetracker = () => {
  const [watch,setwatch] = useState(0)
  const [input,setinput] = useState("")
  const [timer,settimer] = useState(null)
  const [play,setplay]= useState(0)
  const [check,setcheck] = useState(true)
  const [totaltime,settotaltime] = useState(0)
  const [date,setdate] = useState(new Date())
const [playt,setplayt] = useState(true)
const starttime = useRef(null)
const dispatch = useDispatch()
const data = useSelector((store)=>store.taskreducer1.taskdata)


const current = new Date();
const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



 useEffect(()=>{
  dispatch(gettasks())
 },[])


 
 const start =()=>{
  let x = new Date()
  starttime.current = x.getHours()+ ":" +x.getMinutes()
  setcheck(!check)


  if(!timer){
    let id = setInterval(()=>{
      setwatch((e)=>e+10)
    },10)
    settimer(id)
  }

 }



 const stop =()=>{


  let y= new Date();
 setcheck(!check)
 clearInterval(timer)
 setwatch(0)
setdate(date1)
 settimer(null)

 if(play==0){

 dispatch(addtasks({
  title:input,
  starttime:starttime.current,
  endtime:y.getHours()+ ":" +y.getMinutes(),
  timediff:watch,
  date:date1
 }))
 }
setplay(0)

 }

 const updatetask2=(id1)=>{
  setplay(1)
  setplayt(!playt)
  setcheck(false)
 
    dispatch(updatetasks(watch,id1))
    setwatch(0)
    let x = new Date()
    starttime.current = x.getHours()+ ":" +x.getMinutes()
    if(!timer){
      let id = setInterval(()=>{
        setwatch((e)=>e+10)
      },10)
      settimer(id)
    }
  }

 

useEffect(()=>{

  var total =0;
  for(var i=0;i<data.length;i++){
    total += Number(data[i].timediff)
  }

  settotaltime(total)
  
},[stop,removetask])



 function mstotime(duration){
   var milliseconds = parseInt((duration % 1000))
    var seconds = parseInt((duration/1000)%60)
  var minutes = parseInt((duration/(1000*60))%60)
  var hours = parseInt((duration/(1000*60*60))%24);

 hours =(hours <10 ) ?"0"+hours : hours;
 minutes = (minutes < 10 ) ? "0"+ minutes : minutes;
 seconds =(seconds <10) ? "0" + seconds : seconds;

 return hours +":"+ minutes +":"+ seconds
 }


  return (
    <div>
    <div className={styles.timetrackingdiv}>
   <input className={styles.timetrackingleft} placeholder="what are you working on ? " onChange ={(e)=>setinput(e.target.value)} />
  <div className={styles.timetrackingrightpart}>
<div className={styles.timetrackingrightsub}>
  <img src ={plus} alt ="error" />
  <p style ={{fontSize:"14px" , color:"#03a9f4", fontweight:"500", marginRight:"1.5vw"}}>Project</p>

</div>
<div style={{borderRight:'1px solid #e4eaee', borderLeft:'1px solid #e4eaee', padding:'5px 20px'}}>
                        <img src={tag} alt="error"/>
                    </div>

                    <div style={{borderRight:'1px solid #e4eaee', padding:'5px 20px 5px 0px', fontSize:'20px', color:'#999999'}}>$</div>
                    <div style={{fontWeight:'600', fontSize:'18px'}}>{mstotime(watch)}</div>
                    <button className={styles.button1} style={check? {backgroundColor:"blue"}:{backgroundColor:"pink"}} onClick={check ? start : stop}>{check ? "START" : "STOP"}</button>
                    <div style={{display:'grid',gap:'10px'}}>
                        <img src={clock} alt="error" />
                        <img src={list} alt="error" />
                    </div>
  
  </div>
  </div>
            

<br/>
<br/>

 
<div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{ fontSize:'14px'}}>This Week</p>
                <div style={{ fontSize:'12px', display:'flex', alignItems:'center',color:'#9c9c9c'}}>Week Total:
                 <p style={{ fontSize:'18px', padding:'0px 10px', fontWeight:'500',color:'black'}}>{mstotime(totaltime)}</p> 
                 </div>
            </div>
    

              {data.length>0 && data.map((e,ind)=>(
                <Tasklist key ={ind} date={date1} e={e} updatetask1={ updatetask2}/>
              ))}
           
    </div>
  )
}

export default Timetracker

