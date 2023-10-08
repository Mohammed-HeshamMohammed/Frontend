import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './App.css';
// import axios from 'axios';
import MoviesLists from './MoviesLists'

function MoviesDetails() {

  const[movies ,setMovies] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(details=>{
      setMovies(details)
    })
  })
  return (
    <div className='movieDetails'>
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title variant="dark">Movies Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        {
          movies.map(movie=>(
            <Card.Text>
            {movie.username}
          </Card.Text>
          ))
        }
        </Card.Subtitle>
        <Card.Link className='links' href="#">Movie Link</Card.Link>
        <Card.Link className='links' href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Movies Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        {
          movies.map(movie=>(
            <Card.Text>
            {movie.username}
          </Card.Text>
          ))
        }
        </Card.Subtitle>
        <Card.Link className='links' href="#">Movie Link</Card.Link>
        <Card.Link className='links' href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Movies Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {
          movies.map(movie=>(
            <Card.Text>
            {movie.username}
          </Card.Text>
          ))
        }
        </Card.Subtitle>
        <Card.Link className='links' href="#">Movie Link</Card.Link>
        <Card.Link className='links' href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default MoviesDetails
