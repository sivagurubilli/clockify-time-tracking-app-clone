

const {Router} = require("express")
const taskModel = require("../models/tasks")

const taskRouter = Router()


taskRouter.get("/:userId/task",async(req,res)=>{
    const userId = req.params.userId
    const tasks = await taskModel.find({userId})
    
    res.send(tasks)
})

taskRouter.post("/:userId/task",async(req,res)=>{
    const userId = req.params.userId

    // const {title,starttime,endtime,timediff} = req.body
    // console.log(title)
   

let payload ={
    ...req.body,
    userId: userId
   
}



const tasks = await new taskModel(payload)
tasks.save((err,success)=>{
    if(err){
        return res.status(500).send({message:"something went wrong"})

    }
    return res.status(201).send(success)
})

})


taskRouter.delete("/:userId/task/:id",async(req,res)=>{
  await taskModel.deleteOne({_id:req.params.id})
  res.send("succesfully delete task")
})

taskRouter.patch("/:userId/task/:id",async(req,res)=>{
    try{
        await taskModel.findByIdAndUpdate({_id:req.params.id,},{timediff:timediff+req.body}).lean().exec()

        const task =await taskModel.findOne({_id:req.params.id})
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports  =taskRouter