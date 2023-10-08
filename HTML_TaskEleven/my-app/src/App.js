import React from 'react'
import Button from 'react-bootstrap/Button';
import './App.css';
import MoviesDetails from './MoviesDetails';
function App() {

  return (
    <div>
      <nav>
        <h2>Movies Favirotes</h2>
        <button className='btn' type='login'>login</button>
        
      </nav>
      <MoviesDetails />

      <div className='bttn'>
      <Button className='btn1' variant="dark">Per</Button>
      <Button className='btn2' variant="dark">Next</Button>

      </div>
  

    </div>

  );
}

export default App

