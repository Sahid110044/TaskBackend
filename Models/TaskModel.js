const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    TaskName:{
        type:String,
        require:true
    },
    isDone:{
        type:Boolean,   
        require:true
    }
})

const TaskModel = mongoose.model("TaskTodo",TaskSchema)

module.exports = TaskModel;