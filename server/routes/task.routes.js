

const {Router} = require("express")
const taskModel = require("../models/tasks")

const taskRouter = Router()


taskRouter.get("/:userId/task",async(req,res)=>{
    const userId = req.params.userId
    const tasks = await taskModel.find({userId})
    
    res.send(tasks)
})

taskRouter.get("/:userId/task/:id",async(req,res)=>{
   
    const id = req.params.id

    const tasks = await taskModel.find({tid:id})
   
    res.send(tasks)
})


taskRouter.get("/:userId/task/:id",async(req,res)=>{
    const id1 = req.params.id
    const task = await taskModel.findById(id1)

    res.send(task)
})

taskRouter.post("/:userId/task",async(req,res)=>{
    const userId = req.params.userId


    // const {title,starttime,endtime,timediff} = req.body
  if(req.body.timediff!==0){

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
}

})


taskRouter.delete("/:userId/task/:id",async(req,res)=>{
  await taskModel.deleteMany({_id:req.params.id})
  res.send("succesfully delete task")
})

taskRouter.patch("/:userId/task/:id",async(req,res)=>{
   var pay = req.body
    try{
        await taskModel.findByIdAndUpdate({_id:req.params.id},pay).lean().exec()

        const task =await taskModel.findOne({_id:req.params.id})
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports  =taskRouter