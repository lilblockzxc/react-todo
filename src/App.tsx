import React, { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import "./App.css";
import TaskList from "./components/TaskList";
const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "react", body: "zanimaca" },
  ]);

  const addNewTask = () => {
    const newTask = { id: Date.now(), title, body };
    return setTasks([...tasks, newTask]), setBody(""), setTitle("");
  };
  const removeTask = (task) => {
    return setTasks(tasks.filter((x) => x.id !== task.id));
  };
  return (
    <div className="App">
      <input
        value={title}
        placeholder={"Название "}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={body}
        placeholder={"Описание "}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={addNewTask}>Добавить задачу</button>
      {tasks.length !== 0 ? (
        <TaskList tasks={tasks} remove={removeTask} />
      ) : (
        <h1>Задач нет</h1>
      )}
    </div>
  );
};

export default App;
