// dependencies
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const { addTask, findAllTask, deleteTask, changeStatusTask, editTask } = require("./controller/todo")


// app initialize
const app = express()
dotenv.config()
const port = process.env.PORT || 8000



// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


// routes
app.get("/api/todo", findAllTask)
app.post("/api/todo", addTask)
app.delete("/api/todo/:id", deleteTask)
app.put("/api/todo/:id", changeStatusTask)
app.put("/api/edit-todo", editTask)



// create server and connect mongoose
mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(port, ()=>{
        console.log("server is running @http://localhost:8000");
    })
})

