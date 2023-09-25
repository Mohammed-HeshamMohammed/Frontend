import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
