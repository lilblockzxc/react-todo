import React from "react";
import { TaskItem } from "./TaskItem";

const TaskList = ({ tasks, remove }) => {
  return (
    <div>
      <h1>ToDo</h1>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            number={index + 1}
            task={task}
            key={index}
            remove={remove}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
