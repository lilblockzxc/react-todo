import React from "react";
import "../App.css";
export const TaskItem = ({ task, number, remove }) => {
  return (
    <div className="TaskBody">
      <div>
        {number}. {task.title}
      </div>
      <div>{task.body}</div>
      <button
        onClick={() => {
          remove(task);
        }}
      >
        Удалить
      </button>
    </div>
  );
};
