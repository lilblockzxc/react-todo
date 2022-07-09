import React, { useState } from "react";
import "../App.css";
import { Button, Checkbox } from "@mui/material";

export const TaskItem = ({ task, number, remove }) => {
  const [color, setColor] = useState("");

  const ifChecked = (checked) => {
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
        <Button  variant="outlined">Редактировать</Button>
      <Button
        variant="outlined"
        onClick={() => {
          remove(task);
        }}
      >
        Удалить
      </Button>
    </div>
  );
};
