import React from 'react'
import {useRef,useState} from "react"
import styles from "./timetracker.module.css"
import tag from "../timetrackasset/tag-gray.svg"
import plus from "../timetrackasset/plus-blue.svg"
import clock from "../timetrackasset/clock-blue.svg"
import list from "../timetrackasset/list-blue.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addtasks, gettasks, removetask, updatetasks,gettask1, sameidelem } from '../../../redux/tasktimereducer/action'
import Tasklist from './Tasklist'
import Tasklistm from './tasklistm/Tasklistm'
import { useSearchParams } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'




const Timetracker = () => {
  const [watch,setwatch] = useState(0)
  const [input,setinput] = useState("")
  const [timer,settimer] = useState(null)
  const [play,setplay]= useState(0)
  const [tasktotal,settasktotal] = useState(0)
  const [check,setcheck] = useState(true)
  const [totaltime,settotaltime] = useState(0)
  const [date,setdate] = useState(new Date())
const [playt,setplayt] = useState(true)
const starttime = useRef(null)
const dispatch = useDispatch()

//console.log(singledata.timediff)

const data = useSelector((store)=>store.taskreducer1.taskdata)
const singledata = useSelector((store)=>store.taskreducer1.singletask)

const sameidtask = useSelector((store)=>store.taskreducer1.tasksbyid)

const toast = useToast()
const [searchParams] =  useSearchParams()

const current = new Date();
const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

 const id = searchParams.getAll("up")
useEffect(()=>{
  dispatch(gettasks())
   dispatch(sameidelem(id))
 },[singledata,sameidtask,removetask])
 





 
 const start =()=>{
  toast({
    title: input,
    description: "Time entry has been created",
    status: 'success',
    duration: 6000,
    isClosable: true,
  })


  if(input==""){
    toast({
      title: "alert for task title",
      description: "give title for task",
      status: 'success',
      duration: 6000,
      isClosable: true,
    })
  }
  
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
  date:date1,

 }))
 }
 
setplay(0)

 }


 const updatetask2=(id1)=>{
  

  setplay(1)
  setplayt(!playt)
  setcheck(false)
 dispatch(gettask1(id1))
dispatch(sameidelem(id1))
 dispatch(updatetasks(watch,id1))

 let y= new Date();
 

 dispatch(addtasks({
  title:input,
  starttime:starttime.current,
  endtime:y.getHours()+ ":" +y.getMinutes(),
  timediff:watch,
  date:date1,
  tid:id1
 }))
 
 
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

  var wdata=[]
  for(var i=0;i<data.length;i++){
    for(var l=0;l<data.length;l++){
      if(data[i]._id==data[l].tid && data[i].timediff==data[l].timediff){
        wdata.push(data[i])
      }
    }
    
  }
var total =0
   for(var i=0;i<data.length;i++){
    total += Number(data[i].timediff)
   }
var ddata =0

for(var i=0;i<wdata.length;i++){
  ddata += Number(wdata[i].timediff)
}
 settotaltime(total-ddata)

  var tasktotal =0;
  for(var j=0;j<sameidtask.length;j++){
    tasktotal+= Number(sameidtask[j].timediff)
  }
  settasktotal(tasktotal)
  
},[stop,removetask,start,updatetask2])





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
                    <button className={styles.button1}    style={check? {backgroundColor:"blue"}:{backgroundColor:"pink"}} onClick={check ? start : stop}   >{check ? "START" : "STOP"}</button>
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
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{ fontSize:'14px'}}>Total time spent on task</p>
                <div style={{ fontSize:'12px', display:'flex', alignItems:'center',color:'#9c9c9c'}}> Total time on task { sameidtask!==  undefined && sameidtask.length  && sameidtask[0].title}:
                 <p style={{ fontSize:'18px', padding:'0px 10px', fontWeight:'500',color:'black'}}>{mstotime(tasktotal)}</p> 
                 </div>
            </div>

            {
              data.length <1 &&  <div  style ={{margin:"80px 30%", height:"300px", width:"300px" ,textAlign:"center", border:"1px " ,background:"white"}} ><img  src ="https://app.clockify.me/assets/ui-icons/empty-tracker-icon.webp" />
             <h1 >Lets Start Tracking your tasks for better time management  !!</h1>
             <h1>Clockify  your everyday</h1>
              </div>

            }
         { 
          sameidtask.length>0 ? <Tasklistm  items ={sameidtask}/>:null
         }


         {
         data.length >0 && data.map((e,index)=>{
          if(!e.tid || sameidtask.length<1 && e.timediff!=0 ){
          return <Tasklist key ={index} date={date1} elem={e} updatetask1={ updatetask2}/>

          }
         })}


              
         

  
      
      

         
 
        
            
           
    </div>
  )
}

export default Timetracker

