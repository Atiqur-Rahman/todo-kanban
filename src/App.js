import React, { useState } from "react";
import Column from "./components/Column";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Sample Task 1",
    description: "This is a sample task",
    status: "New",
  },
  {
    id: 2,
    title: "Sample Task 2",
    description: "This is another sample task",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Sample Task 3",
    description: "This task is done",
    status: "Done",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const updateTodoStatus = (id, status) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status,
            completedAt: status === "Done" ? new Date() : todo.completedAt,
          }
        : todo
    );
    if (status === "Done") {
      setTodos([
        ...updatedTodos.filter((todo) => todo.status !== "Done"),
        ...updatedTodos.filter((todo) => todo.status === "Done"),
      ]);
    } else {
      setTodos(updatedTodos);
    }
  };

  const addTodo = (title, description) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      status: "New",
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]); // Add new todo at the top
  };

  return (
    <div className="app">
      <h1>Todo Kanban</h1>
      <div className="kanban-board">
        {["New", "Ongoing", "Done"].map((status) => (
          <Column
            key={status}
            status={status}
            todos={todos.filter((todo) => todo.status === status)}
            updateTodoStatus={updateTodoStatus}
            addTodo={status === "New" ? addTodo : null}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
