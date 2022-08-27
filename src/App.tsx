import React, { FC } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskBlock } from "./Tasks/TaskBlock";
import { NavBar } from "./Navigations/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";
import { TaskProvider } from "./Context";
import { TestPost } from "./testNest";

const App: FC = () => {
  console.log("render APP");
  return (
    <TaskProvider>
      <BrowserRouter>
        <NavBar />

        {/* <TestPost /> */}
        <Routes>
          <Route path="/" element={<TaskBlock />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/reg" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
};

export default App;
