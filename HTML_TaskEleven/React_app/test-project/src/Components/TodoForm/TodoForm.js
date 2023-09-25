import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter a new task"
        required
      />
      <button className="add-button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
