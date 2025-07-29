const TaskModel = require("../Models/TaskModel.js")

const CreateTask = async(req,res)=>{
    const data = req.body
     try{
       const model = new TaskModel(data)
       await model.save()
       res.status(201).json({message:'Task is created',success:true})
     }catch(err){
       console.log("Error in CreateTask:", err);
       res.status(500).json({message:'Failed to create',success:false})
     }
} 


const FetchAllTask = async(req,res)=>{
    try{
       const data = await TaskModel.find({})
       res.status(200).json({message:"Task is fetched",success:true,data})
    }catch(err){
       res.status(500).json({message:"Failed to fetche",success:false})
    }
}


const updateTaskById = async(req,res)=>{
    try{
       const id = req.params.id
       const body = req.body
       const obj = {$set:{...body}}
       const data = await TaskModel.findByIdAndUpdate(id, obj)
       res.status(200).json({message:'Task is updated', success:true, data})
    }catch(err){
       res.status(500).json({message:'Failed to update', success:false})
    }
}


const deleteTaskById = async(req,res)=>{
   try{
      const id = req.params.id
      await TaskModel.findByIdAndDelete(id)
      res.status(200).json({message:'task is deleted', success:true})
   }catch(err){
      res.status(500).json({message:'failed to delete',success:false})
   }
}

module.exports = {
    CreateTask,
    FetchAllTask,
    updateTaskById,
    deleteTaskById,
}

