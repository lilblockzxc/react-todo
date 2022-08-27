import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";

interface Cat {
  name: string;
  age: number;
  breed: string;
}

export const apiService = {
  getJson: async function <T>(url: string) {
    const resp = await fetch(url);
    const res: T = await resp.json();
    return res;
  },
  postJson: async function <Resp, Req = any>(url: string, body?: Req) {
    const resp = await fetch(url, {
      method: "POST",
      // mode: "no-cors",
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        // Accept: "text/html",
        "Content-Type": "application/json",
      },
    });
    const res: Resp = await resp.json();
    return res;
  },

  api: async () => {
    return await apiService.getJson<Cat[]>("/api");
  },
};

export const Login = () => {
  let navigate = useNavigate();

  // const handleSubmit = async () => {
  //   //e.preventDefault();
  //   const a: Cat = { name: "sirnik", age: 10, breed: "obichnii" };
  //   //console.log(a);
  //   try {
  //     const data = await apiService.getJson("/cats/test");
  //     // postJson<Cat[]>(
  //     //   "http://localhost:3333/api",
  //     //   a
  //     // );
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //     //setErrorMessage(e);
  //   }

  //   // if (data.status === parseInt("401")) {
  //   //  setErrorMessage(data.response);
  //   // } else {
  //   //   localStorage.setItem("token", data.token);

  //   navigate("/");
  // };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Авторизация
      </Typography>
      <TextField className={styles.field} label="E-Mail" fullWidth />
      <TextField
        className={styles.field}
        label="Пароль"
        fullWidth
        type="password"
      />
      <Button
        size="large"
        variant="contained"
        fullWidth
        onClick={() => {
          navigate("/");
        }}
      >
        Войти
      </Button>
    </Paper>
  );
};
