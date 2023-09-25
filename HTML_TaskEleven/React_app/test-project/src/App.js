import React from 'react';
import { createUseStyles } from 'react-jss';
import TodoList from '../src/Components/TodoList';  // Adjust the path as needed

import './App.css';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TodoList />
    </div>
  );
};

export default App;
