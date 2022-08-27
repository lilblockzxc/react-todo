import { Button, Input } from "@mui/material";
import React, { FC, useState } from "react";
import { Task } from "../Context";

export const TaskEdit: FC<{
  task: Task;
  onSaveCancel: (task: Task | undefined) => void;
}> = ({ task, onSaveCancel }) => {
  const [editTask, setEditTask] = useState({ ...task });
  return (
    <div>
      {editTask.title.length < 4 ? <p>Введите название</p> : null}
      <Input
        value={editTask.title}
        placeholder={"Название "}
        color={editTask.title.length > 3 ? "primary" : "warning"}
        onChange={(e) => {
          setEditTask({ ...editTask, title: e.target.value });
        }}
      />
      {editTask.body.length < 4 ? <p>Введите описание</p> : null}
      <Input
        value={editTask.body}
        placeholder={"Описание "}
        color={editTask.body.length > 3 ? "primary" : "warning"}
        onChange={(e) => {
          setEditTask({ ...editTask, body: e.target.value });
        }}
      />

      <Button
        /* disabled={isBtnDisabled} */ variant="outlined"
        disabled={
          editTask.title.length && editTask.body.length > 3 ? false : true
        }
        onClick={() => {
          onSaveCancel(editTask);
        }}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          onSaveCancel(undefined);
        }}
      >
        Cancel
      </Button>
    </div>
  );
};
