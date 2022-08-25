

const mongoose = require("mongoose")

const tasksSchema = mongoose.Schema({
    title:{type:String,require:false},
    starttime :{type:String,require:true},
    endtime:{type:String,require:true},
    timediff:{type:String,require:true},
    userId :{type:String,require:true}
    

})

const taskModel  = mongoose.model("tasks1",tasksSchema)

module.exports =taskModel