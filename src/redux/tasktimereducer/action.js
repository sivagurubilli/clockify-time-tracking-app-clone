
import * as types from "./actiontypes"
import axios from "axios"

export const gettasks =()=>(dispatch)=>{
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x.user.id;
    axios.get(`https://localhost:8080/tasks/${id}tasks`).then((r)=>{
        dispatch({type:types.GET_TASKS,payload:r.data})
    })
}


export const addtasks =(payload)=>(dispach)=>{
   let x = JSON.parse(localStorage.getItem("userData"))

   let id = x.user._id
   axios.post(`https://localhost:8080/tasks/${id}tasks`,payload).then((r)=>{
    dispach({type:types.ADD_TASKS,payload:r.data})
   })
}


