

import * as types from "./actiontypes";



const tasksinitstate ={
    taskdata :[]
}


export const taskreducer =(state = tasksinitstate,action)=>{
   const {type,payload} = action
   switch(type){
    case types.GET_TASKS:
 return{
    ...state,
    taskdata:payload,
 }

 case types.ADD_TASKS:
    return{
        ...state,
        taskdata:payload
    }
   }
}