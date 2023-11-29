const createHttpError = require("http-errors")
const Todo = require("../model/todoModel")

// find all task in mongoose
const findAllTask = async (req, res, next)=>{
    try {  
    const findTodo = await Todo.find({})
    res.send(findTodo.reverse())

    } catch(error){
        next (createHttpError(error))
    }
}


// add task in mongoose
const addTask = async (req, res, next)=>{
    try {
        const todo = await Todo.create({
            ...req.body,
            status:"Incomplete"
        })

        if(todo){
            const findTodo = await Todo.find({})
            res.send(findTodo.reverse())
        }

    } catch(error){
        next (createHttpError(error))
    }
}

// delete task in mongoose
const deleteTask = async (req, res, next)=>{
    try {
      const deleteTask = await Todo.findOneAndDelete({_id: req.params.id})
        if(deleteTask){
            const findTodo = await Todo.find({})
            res.send(findTodo.reverse())
        }

    } catch(error){
        next (createHttpError(error))
    }
}

// change task status in mongoose
const changeStatusTask = async (req, res, next)=>{
    try {
      const TaskStatus = await Todo.findOne({_id: req.params.id})
      const currentStatus = TaskStatus.status === "Incomplete" ? "Completed" : "Incomplete"
      const ChangeStatus = await Todo.updateOne({_id: req.params.id},{$set:{status: currentStatus}})
        
      if(ChangeStatus){
            const findTodo = await Todo.find({})
            res.send(findTodo.reverse())
        }

    } catch(error){
        next (createHttpError(error))
    }
}

// edit task  in mongoose
const editTask = async (req, res, next)=>{
    try {
      const editTask = await Todo.findOneAndUpdate({_id: req.body._id},{$set:{name: req.body.name}})
        
      if(editTask){
            const findTodo = await Todo.find({})
            res.send(findTodo.reverse())
        }

    } catch(error){
        next (createHttpError(error))
    }
}

module.exports = {
    addTask,
    findAllTask,
    deleteTask,
    changeStatusTask,
    editTask,
}