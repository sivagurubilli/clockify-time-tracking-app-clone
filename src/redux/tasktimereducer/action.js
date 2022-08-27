
import * as types from "./actiontypes"
import axios from "axios"

export const gettasks =()=>(dispatch)=>{
  
    axios.get(`http://localhost:8080/tasks/${1}/task`).then((r)=>{
        
        dispatch({type:types.GET_TASKS,payload:r.data})
    })
}

export const gettask1 =(payload)=>(dispatch)=>{
 
  axios.get(`http://localhost:8080/tasks/${1}/task/${payload}`).then((r)=>{
      console.log(r.data)
      dispatch({type:types.GET_TASK1,payload:r.data})
  })
}

export const sameidelem =(payload)=>(dispatch)=>{
 
  axios.get(`http://localhost:8080/tasks/${1}/task/${payload}`).then((r)=>{
 
      dispatch({type:types.GET_TASKSBYID,payload:r.data})
  })
}



export const addtasks =(payload)=>(dispatch)=>{

 axios.post(`http://localhost:8080/tasks/${1}/task`,  payload).then((r)=>{
    dispatch({type:types.ADD_TASKS,payload:r.data})
   })
}


export const removetask=(payload)=>(dispatch)=>{
  
axios.delete(`http://localhost:8080/tasks/${1}/task/${payload}`).then((r)=>{
   
    dispatch({type:types.REMOVE_TASKS,payload:payload})
}
)
}


export const updatetasks =(watch,id1)=>(dispatch)=>{

 
 var  watch1= {"timediff":watch}
  axios.patch(`http://localhost:8080/tasks/${1}/task/${id1}`, watch1).then((r)=>{
    
    dispatch({type:types.UPDATE_TASKS,payload:r.data})
   
  })
}
