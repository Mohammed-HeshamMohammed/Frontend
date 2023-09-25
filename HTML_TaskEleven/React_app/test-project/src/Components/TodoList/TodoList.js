import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TodoItem
              task={task}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          </li>
        ))}
      </ul>
      <TodoForm onAdd={handleAddTask} />
    </div>
  );
};

export default TodoList;
