const DisplayTask = () => {
  return (
    <ul className="TaskContainer">
      <li>
        <p>Tariqul Islam</p>
        <div className="taskBtn">
          <button className="edit">Edit</button>
          <button className="status">Change Status</button>
          <button className="delete">Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default DisplayTask;
