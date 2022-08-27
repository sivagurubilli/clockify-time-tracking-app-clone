

import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtasks } from '../../../../redux/tasktimereducer/action'
import Tasklist from '../Tasklist'
import Tasklist1 from '../Tasklist1'
import styles from "./tasklistm.module.css"

const Tasklistm = (items) => {
    var it =[]

   
 for(var i=0;i<items.items.length;i++){
   it.push(items.items[i])
 }


  const current = new Date();
  const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    
  
  return (
   
    <div className={styles.sametasks}  >
        {it.length>0&& it.map((e,ind)=>{
          
            if(e.timediff!=0){
                return <Tasklist1 key ={ind} date={date1} elem ={e}/>
            }
        })}
    </div>
  )
}

export default Tasklistm