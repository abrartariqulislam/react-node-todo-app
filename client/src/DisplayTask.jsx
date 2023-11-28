
const DisplayTask = ({todoes, setTodo}) => {

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

  return (
    <ul className="TaskContainer">
    {todoes.map((todo, index)=>{
      return <li key={todo._id}>
       <p>{index + 1}</p>
       <p className="name">{todo.name}</p>
       <p>{todo.status}</p>
       <div className="taskBtn">
         <button className="edit" id={todo._id}>Edit</button>
         <button className="status" onClick={changeStatusHandler} id={todo._id}>Change Status</button>
         <button className="delete" onClick={deleteHandler} id={todo._id}>Delete</button>
       </div>
     </li>
    })}

     
    </ul>
  );
};

export default DisplayTask;
