import { List } from "@mui/material";
import React, { FC } from "react";
import { useTasks } from "../Context";
import { TaskItem } from "./TaskItem";

const TaskList: FC = () => {
  const taskService = useTasks();
  interface Task {
    id: number;
    title: string;
    body: string;
  }

  return (
    <List>
      <h1>ToDo</h1>
      {taskService.tasks.map((task: Task, index: number) => {
        return <TaskItem number={index + 1} task={task} key={index} />;
      })}
    </List>
  );
};

export default TaskList;
