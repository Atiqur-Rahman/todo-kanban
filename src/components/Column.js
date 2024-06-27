import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Column.css";

function Column({ status, todos, updateTodoStatus, addTodo }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    if (newTitle && newDescription) {
      addTodo(newTitle, newDescription);
      setNewTitle("");
      setNewDescription("");
    }
  };

  return (
    <div className={`column column-${status.toLowerCase()}`}>
      <h2>{status}</h2>
      <div className="todos">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </div>
      {status === "New" && (
        <div className="add-todo">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
      )}
    </div>
  );
}

export default Column;
