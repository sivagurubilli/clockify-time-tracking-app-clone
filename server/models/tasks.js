


const mongoose = require("mongoose")

const tasksSchema = mongoose.Schema({
    title:{type:String,require:false},
    starttime :{type:String,require:true},
    endtime:{type:String,require:true},
    timediff:{type:Number,require:true},
    userId :{type:String},
    date:{type:String},
    tid:{type:String}
    

})

const taskModel  = mongoose.model("tasks",tasksSchema)

module.exports =taskModel