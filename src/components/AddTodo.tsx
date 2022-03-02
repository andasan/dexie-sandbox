import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { add } from "../db";

export function AddTodo() {
  const [todo, setTodo] = useState({
    title: "",
    memo: "",
    complete: 0,
  });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!todo.title) {
      toast.error("😡 Enter a title!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      // add(todo);
      // setTodo({ title: "", memo: "", complete: 0 });
    }
  }

  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <h3>Add new todo</h3>
      <form onSubmit={onSubmit}>
        <TextField
          margin="normal"
          fullWidth
          autoFocus
          label="Title"
          placeholder="Enter Title..."
          value={todo.title}
          onChange={(ev) =>
            setTodo((todo) => ({
              ...todo,
              title: ev.target.value,
            }))
          }
        />

        <TextField
          margin="normal"
          fullWidth
          autoFocus
          label="Memo"
          placeholder="Enter Memo"
          value={todo.memo}
          onChange={(ev) =>
            setTodo((todo) => ({
              ...todo,
              memo: ev.target.value,
            }))
          }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Todo
        </Button>
      </form>
    </>
  );
}
