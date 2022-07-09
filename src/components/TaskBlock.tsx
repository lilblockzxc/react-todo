import React, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import TaskList from "./TaskList";

export const TaskBlock = () => {
  const [taskState, setTaskState] = useState("Введите название задачи");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isBtnDisabled, setBool] = useState(true);

  const [tasks, setTasks] = useState([
    { id: 1, title: "react", body: "zanimaca" },
  ]);

  const addNewTask = () => {
    const newTask = { id: Date.now(), title, body };
    // eslint-disable-next-line no-sequences
    return setTasks([...tasks, newTask]), setBody(""), setTitle("");
  };
  const removeTask = (task) => {
    return setTasks(tasks.filter((x) => x.id !== task.id));
  };
  //const editTask = () => {};
  const ifNameChanged = (name) => {
    if (name.length < 3) {
      setBool(true);
      setTaskState("Введите название задачи");
    } else {
      setBool(false);
      setTaskState("ok");
    }
  };

  useEffect((): void => {
    const newData = window.localStorage.getItem("tasks");
    const parsedData = JSON.parse(newData);
    setTasks(parsedData);
    console.log("1srender");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h2>{taskState}</h2>
      <Input
        value={title}
        placeholder={"Название "}
        onChange={(e) => {
          ifNameChanged(title);
          setTitle(e.target.value);
        }}
      />
      <Input
        value={body}
        placeholder={"Описание "}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <Button
        disabled={isBtnDisabled}
        variant="outlined"
        onClick={() => {
          addNewTask();
          setBool(true);
          setTaskState("Введите название задачи");
        }}
      >
        Добавить задачу
      </Button>
      {tasks.length !== 0 ? (
        <TaskList tasks={tasks} remove={removeTask} />
      ) : (
        <h1>Задач нет</h1>
      )}
    </div>
  );
};
