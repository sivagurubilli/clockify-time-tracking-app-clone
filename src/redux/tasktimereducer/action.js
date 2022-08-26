
import * as types from "./actiontypes"
import axios from "axios"

export const gettasks =()=>(dispatch)=>{
  
    axios.get(`http://localhost:8080/tasks/${1}/task`).then((r)=>{
        
        dispatch({type:types.GET_TASKS,payload:r.data})
    })
}


export const addtasks =(payload)=>(dispatch)=>{

 axios.post(`http://localhost:8080/tasks/${1}/task`,  payload).then((r)=>{
    dispatch({type:types.ADD_TASKS,payload:r.data})
   })
}


