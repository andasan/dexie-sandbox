import * as React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from './utils/theme'
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { ClearDatabaseButton } from "./components/ClearDatabaseButton";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <h1>Todos</h1>
        <TodoList />
        <AddTodo />
        <ClearDatabaseButton />
      </Container>
    </ThemeProvider>
  );
}
