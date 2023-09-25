import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import MoviesList from '../src/Components/MoviesList/MoviesList';
import MovieDetails from '../src/Components/MoviesDetails/MoviesDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/movies">
        <MoviesList />
      </Route>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
