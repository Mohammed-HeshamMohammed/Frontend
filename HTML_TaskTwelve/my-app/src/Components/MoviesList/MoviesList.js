import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MoviesList.css'; 

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch movies based on the current page from the API
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Movies List</h2>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button onClick={handlePrevPage} className="btn btn-secondary" disabled={page === 1}>Previous Page</button>
        <button onClick={handleNextPage} className="btn btn-secondary">Next Page</button>
      </div>
    </div>
  );
};

export default MoviesList;
