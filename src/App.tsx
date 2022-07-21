import React, { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskBlock } from "./components/TaskBlock";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []);

  return (
    <BrowserRouter>
      <h1>{!data ? "Loading..." : data}</h1>

      <NavBar />
      <Routes>
        <Route path="/" element={<TaskBlock />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reg" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
