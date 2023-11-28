const createHttpError = require("http-errors")
const Todo = require("../model/todoModel")

// find all task in mongoose
const findAllTask = async (req, res, next)=>{
    try {  
    const findTodo = await Todo.find({})
    res.send(findTodo)

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
            res.send(findTodo)
        }

    } catch(error){
        next (createHttpError(error))
    }
}

module.exports = {
    addTask,
    findAllTask,
}