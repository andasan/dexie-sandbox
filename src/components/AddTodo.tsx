import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { db } from "../db";

export function AddTodo() {
  const [todo, setTodo] = useState({
    title: "",
    memo: "",
    complete: 0,
  });

  function onSubmit(event: FormEvent) {
    db.todos.add(todo);
    event.preventDefault();
    setTodo({ title: "", memo: "", complete: 0 });
  }

  return (
    <>
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
