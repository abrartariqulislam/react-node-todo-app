import { useState } from "react";

// task headers
const TaskHeader = ()=>{

  return (
    <li key="01">
      <p>No</p>
      <p className="headerName">Task name</p> 
      <p className="taskStatus">Status</p>
      <div className="taskBtn">Action</div>
    </li>
)}



// task list
const DisplayTask = ({todoes, setTodo}) => {
  const [editTodo, setEditTodo] = useState(null)

  // delete task in database
  const deleteHandler = (e)=>{
    fetch(`/api/todo/${e.target.id}`,{
      method:"DELETE"
    })
    .then(r=> r.json())
    .then(data=>{
      setTodo(data)
    })
  }
// change task status in database
const changeStatusHandler = (e)=>{
  fetch(`/api/todo/${e.target.id}`,{
    method:"PUT"
  })
  .then(r=> r.json())
  .then(data=>{
      setTodo(data)
  })
}
// change edit input value
const changeEditInputValue = (e)=>{
  setEditTodo({
    ...editTodo,
    name: e.target.value
  })
}
// find edit task 
const editHandler = (e)=>{
  const findTask = todoes.find(todo => todo._id === e.target.id)
  setEditTodo(findTask)
}
// edit task in database
const editTaskSubmitHandler = ()=>{
fetch("/api/edit-todo",{
  method:"PUT",
  headers:{
    "content-type":"Application/json"
  },
  body: JSON.stringify(editTodo)
})
.then(r=> r.json())
.then(data=>{
  setTodo(data)
  setEditTodo(null)
})
}

  return (
    <ul className="TaskContainer">
     <TaskHeader /> 

     {/* task list */}
    {todoes.map((todo, index)=>{
      return <li key={todo._id}>
       <p>{index + 1}</p>
       { editTodo && editTodo._id === todo._id ?
       <input type="text" value={editTodo.name} onChange={changeEditInputValue}  className="editInputField" />:
       <p className="name">{todo.name}</p> 
      }
       
       <p>{todo.status}</p>

       {editTodo && editTodo._id === todo._id ?
        <div className="taskBtn">
        <button className="saveBtn"  disabled={!editTodo.name} onClick={editTaskSubmitHandler}>Save</button> 
        </div> :
         <div className="taskBtn">
         <button className="edit" onClick={editHandler} id={todo._id}>Edit</button>
         <button className="status" onClick={changeStatusHandler} id={todo._id}>Change Status</button>
         <button className="delete" onClick={deleteHandler} id={todo._id}>Delete</button>
       </div>
       }
     
     </li>
    })}

    </ul>
  
  );
};

export default DisplayTask;
