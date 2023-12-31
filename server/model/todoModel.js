const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        enum:["Incomplete","Completed"],
        required:true
    }
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo