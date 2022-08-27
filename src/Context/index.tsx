import React, { useContext, useState } from "react";
import { FCC } from "../oldReact";
export interface Task {
  id: number;
  title: string;
  body: string;
}
class TaskService {
  constructor(public refresh: () => void) {
    console.log("service created");
  }
  tasks: Task[] = [];
  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
    this.refresh();
  }
  //  createTask(){

  //  }
  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((x) => x.id !== task.id);
    console.log(this.tasks);
    this.refresh();
  }

  editTask(task: Task) {
    let index = this.tasks.findIndex((x) => x.id === task.id);

    this.tasks[index] = task;
    this.tasks = [...this.tasks];

    this.refresh();
    console.log(this.tasks);
  }
}

const TaskContext = React.createContext<{ service: TaskService }>(
  undefined as any
);

//const UserTaskContext = React.createContext({ user: [{ a: "asd" }] });

export const TaskProvider: FCC = ({ children }) => {
  const [, update] = useState({});
  const [service] = useState(() => new TaskService(() => update({})));

  return (
    <TaskContext.Provider value={{ service }}>{children}</TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext).service;
