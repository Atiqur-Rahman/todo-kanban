import React from "react";
import "./ContextMenu.css";

function ContextMenu({ x, y, options, onSelect, onClose }) {
  return (
    <div
      className="context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
      onClick={onClose}
    >
      {options.map((option) => (
        <div
          key={option}
          className="context-menu-item"
          onClick={() => onSelect(option)}
        >
          Move to {option}
        </div>
      ))}
    </div>
  );
}

export default ContextMenu;
