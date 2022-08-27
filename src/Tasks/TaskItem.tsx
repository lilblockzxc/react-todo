import React, { FC, useState } from "react";
import "../App.css";
import { Button, Checkbox } from "@mui/material";
import { Task, useTasks } from "../Context";
import { TaskEdit } from "./TaskEdit";

interface Iprop {
  task: Task;
  number: number;
}
export const TaskItem: FC<Iprop> = ({ task, number }: Iprop) => {
  const [color, setColor] = useState("");
  const taskService = useTasks();
  const [editTask, setEditTask] = useState<Task>(null);
  const ifChecked = (checked: boolean) => {
    if (checked === true) {
      setColor("green");
    } else {
      setColor("");
    }
  };

  return (
    <div className="TaskBody">
      <div style={{ backgroundColor: color }}>
        {number}. {task.title}
      </div>
      <div>{task.body}</div>

      <Checkbox
        onChange={(event, checked) => {
          ifChecked(checked);
        }}
      />
      {!editTask ? (
        <Button
          variant="outlined"
          onClick={() => {
            setEditTask(task);
          }}
        >
          Редактировать
        </Button>
      ) : (
        editTask && (
          <TaskEdit
            task={editTask}
            onSaveCancel={(changedTask) => {
              if (changedTask) {
                taskService.editTask(changedTask);
              }
              setEditTask(null); // close editor
            }}
          />
        )
      )}
      {!editTask ? (
        <Button
          variant="outlined"
          onClick={() => {
            taskService.deleteTask(task);
          }}
        >
          Удалить
        </Button>
      ) : null}
    </div>
  );
};
