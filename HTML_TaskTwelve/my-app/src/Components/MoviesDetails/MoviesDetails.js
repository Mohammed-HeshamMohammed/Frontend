import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details from the API based on the movie ID
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
