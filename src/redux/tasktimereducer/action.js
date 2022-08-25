
import * as types from "./actiontypes"
import axios from "axios"

export const gettasks =()=>(dispatch)=>{
  
    axios.get(`https://localhost:8080/tasks/${1}tasks`).then((r)=>{
        dispatch({type:types.GET_TASKS,payload:r.data})
    })
}


export const addtasks =(payload)=>(dispach)=>{
  
   axios.post(`https://localhost:8080/tasks/${1}tasks`,payload).then((r)=>{
    dispach({type:types.ADD_TASKS,payload:r.data})
   })
}


