import React from "react";
import { useLiveQuery } from "dexie-react-hooks";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import { db } from "../db";

export function TodoList() {
  const todos = useLiveQuery(
    () => db.todos.where("complete").equals(0).sortBy("id"),
    []
  );

  const todoCount = useLiveQuery(() => db.todos.where("complete").equals(0).count());
  const completedCount = useLiveQuery(() => db.todos.where("complete").equals(1).count());

  if (!todos || todoCount === undefined) return null;

  return (
    <>
      <CssBaseline />
      <Typography component="h1" variant="h5">
        You have <b>{todoCount}</b> todos in total.
      </Typography>
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color={completedCount === 0 ? "text.disabled" : "text.secondary"}
      >
        You have <b>{completedCount}</b> completed
      </Typography>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <>
                  <IconButton 
                    edge="end" 
                    aria-label="complete" 
                    sx={{ mr: 1 }}
                    onClick={() =>
                      db.todos
                        .where({
                          id: todo.id
                        })
                        .modify((x) => ++x.complete)
                    }
                  >
                    <CheckIcon />
                  </IconButton>
                  <IconButton 
                    edge="end" 
                    aria-label="delete"
                    onClick={() => db.todos.where({id: todo.id}).delete()}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  todo.title.charAt(0).toUpperCase() + todo.title.slice(1)
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {` — ${todo.memo}`}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
