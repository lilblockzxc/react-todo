import React, { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
import TaskList from "./TaskList";
import { Task, useTasks } from "../Context";
import { TaskEdit } from "./TaskEdit";

export const TaskBlock: FC = () => {
  // const [taskState, setTaskState] = useState<string>("Введите название задачи");
  // const [title, setTitle] = useState<string>("");
  // const [body, setBody] = useState<string>("");
  // const [isBtnDisabled, setBool] = useState<boolean>(true);

  const [editTask, setEditTask] = useState<Task>(null);
  const ts = useTasks();
  const { tasks } = ts;
  //const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = (): void => {
    const newTask: Task = { id: Date.now(), title: "", body: "" };
    setEditTask(newTask);
  };

  // const [, update] = useState({});

  useEffect(() => {
    const newData = window.localStorage.getItem("tasks");
    const parsedData: Task[] = JSON.parse(newData) ?? [];
    // setTasks(parsedData);
    ts.tasks = parsedData;
    // update({});
    ts.refresh();
    console.log("mount");
  }, [ts]);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(ts.tasks));
  }, [ts.tasks]);

  console.log("render");

  return (
    <div className="App">
      {/* <h2>{taskState}</h2> */}
      {!editTask ? (
        <Button
          // disabled={isBtnDisabled}
          variant="outlined"
          onClick={() => {
            addNewTask();
          }}
        >
          Добавить задачу
        </Button>
      ) : (
        editTask && (
          <TaskEdit
            task={editTask}
            onSaveCancel={(changedTask) => {
              if (changedTask) {
                ts.addTask(changedTask);
              }
              setEditTask(null); // close editor
            }}
          />
        )
      )}

      {tasks.length !== 0 ? (
        <TaskList /* tasks={tasks} remove={removeTask} */ />
      ) : (
        <h1>Задач нет</h1>
      )}
    </div>
  );
};
