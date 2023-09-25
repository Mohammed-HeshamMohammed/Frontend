import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        &#x2716;
      </button>
    </div>
  );
};

export default TodoItem;
