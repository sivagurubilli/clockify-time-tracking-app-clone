

import * as types from "./actiontypes";



const tasksinitstate ={
    taskdata :[],
   tasksbyid:[]
  
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
        taskdata:[...state.taskdata,payload]
    }
    case types.REMOVE_TASKS:
      return{
         ...state,
         taskdata:[...state.taskdata.filter((e)=>e._id!=payload)]
      }
      case types.GET_TASK1:
         return{
         ...state,
      
          singletask:payload
         }

         case types.GET_TASKSBYID:
            return{
              ...state,
            tasksbyid:payload
            }
         case types.UPDATE_TASKS:

            return{
               ...state,
             taskdata:[...state.taskdata.map((e)=>e._id==payload._id? payload:e)]
            }
    default:
        return state
   }
}