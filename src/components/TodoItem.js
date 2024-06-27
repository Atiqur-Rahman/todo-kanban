import React, { useState, useEffect } from "react";
import "./TodoItem.css";
import ContextMenu from "./ContextMenu";

function TodoItem({ todo, updateTodoStatus }) {
  const [contextMenu, setContextMenu] = useState(null);
  const [dueDate, setDueDate] = useState(todo.dueDate || "");

  const handleRightClick = (e) => {
    e.preventDefault();
    const options = getMoveOptions(todo.status);
    setContextMenu({ x: e.clientX, y: e.clientY, options });
  };

  const handleSelect = (status) => {
    updateTodoStatus(todo.id, status);
    setContextMenu(null);
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    if (todo.status === "Ongoing" && dueDate) {
      const interval = setInterval(() => {
        if (new Date(dueDate) < new Date()) {
          alert(`Task "${todo.title}" is overdue!`);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dueDate, todo.status, todo.title]);

  return (
    <div
      className="todo-item"
      style={{ borderLeft: `5px solid ${statusColor(todo.status)}` }}
      onContextMenu={handleRightClick}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      {todo.status === "Ongoing" && (
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
            updateTodoStatus(todo.id, { ...todo, dueDate: e.target.value });
          }}
        />
      )}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          options={contextMenu.options}
          onSelect={handleSelect}
          onClose={handleCloseContextMenu}
        />
      )}
    </div>
  );
}

const statusColor = (status) => {
  switch (status) {
    case "New":
      return "blue";
    case "Ongoing":
      return "orange";
    case "Done":
      return "green";
    default:
      return "grey";
  }
};

const getMoveOptions = (currentStatus) => {
  const allStatuses = ["New", "Ongoing", "Done"];
  return allStatuses.filter((status) => status !== currentStatus);
};

export default TodoItem;
