

const AddTask = () => {
  return (
    <>
      <h1>ToDo App List</h1>
        <form  className="TaskFelid">
        <input type="text" className="inputField" placeholder="Task name......." />
        <input type="submit" className="addBtn" value="Add Task" />
        </form>
    </>
  );
};

export default AddTask;
