

const {Router} = require("express")
const taskModel = require("../models/tasks")

const taskRouter = Router()


taskRouter.get(":userId/tasks",async(req,res)=>{
    const userId = req.params.userId
    const tasks = await taskModel.find({userId})
    res.send(tasks)
})

taskRouter.post("/:userId/tasks",async(req,res)=>{
    const userId = req.params.userId
let payload ={
    ...req.body,
    userId
}

const task = await new taskModel(payload)
task.save((err,success)=>{
    if(err){
        return res.status(500).send({message:"something went wrong"})

    }
    return res.status(201).send(success)
})

})