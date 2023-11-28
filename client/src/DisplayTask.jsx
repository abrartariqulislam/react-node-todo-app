const DisplayTask = ({todoes}) => {
  return (
    <ul className="TaskContainer">

    {todoes.map((todo, index)=>{
      return <li key={todo._id}>
       <p>{index}</p>
       <p className="name">{todo.name}</p>
       <p>{todo.status}</p>
       <div className="taskBtn">
         <button className="edit" id={todo._id}>Edit</button>
         <button className="status" id={todo._id}>Change Status</button>
         <button className="delete" id={todo._id}>Delete</button>
       </div>
     </li>
    })}

     
    </ul>
  );
};

export default DisplayTask;
