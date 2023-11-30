import { useEffect, useState } from "react";

const AddTask = ({ setTodo }) => {
  const [newTodo, setNewTodo] = useState({
    name: "",
  });

  // find all data form database
  useEffect(() => {
    fetch("/api/todo")
      .then((r) => r.json())
      .then((data) => {
        setTodo(data);
      });
  });

  // input change handler
  const changeHandler = (e) => {
    setNewTodo({
      name: e.target.value,
    });
  };

  // add new todo in database
  const addTaskHandler = (e) => {
    e.preventDefault();
    fetch("/api/todo", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((r) => r.json())
      .then((data) => {
        setTodo(data);
        setNewTodo({
          name: "",
        });
      });
  };

  return (
    <>
      <h1>ToDo App List</h1>
      <form className="TaskFelid" onSubmit={addTaskHandler}>
        <input
          type="text"
          value={newTodo.name}
          onChange={changeHandler}
          className="inputField"
          placeholder="Task name......."
        />
        <input
          type="submit"
          disabled={!newTodo.name}
          className="addBtn"
          value="Add Task"
        />
      </form>
    </>
  );
};

export default AddTask;
