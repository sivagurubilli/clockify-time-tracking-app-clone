

const {Router} = require("express")
const taskModel = require("../models/tasks")

const taskRouter = Router()


taskRouter.get("/:userId/task",async(req,res)=>{
    const userId = req.params.userId
    const tasks = await taskModel.find({userId})
    
    res.send(tasks)
})

taskRouter.post("/:userId/task",async(req,res)=>{
   // const userId = req.params.userId

    // const {title,starttime,endtime,timediff} = req.body
    // console.log(title)
   

let payload ={
    ...req.body,
    userId:1
   
}



const tasks = await new taskModel(payload)
tasks.save((err,success)=>{
    if(err){
        return res.status(500).send({message:"something went wrong"})

    }
    return res.status(201).send(success)
})

})


module.exports  =taskRouter