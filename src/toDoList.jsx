import React, { useState } from "react";
import Swal from "sweetalert2";
import "./index.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim().length > 0) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Task cannot be empty",
      });
    }
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index - 1];
      newTasks[index - 1] = temp;
      setTasks(newTasks);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already on top",
      });
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index + 1];
      newTasks[index + 1] = temp;
      setTasks(newTasks);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already on bottom",
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button className="moveup-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button
              className="movedown-button"
              onClick={() => moveTaskDown(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
