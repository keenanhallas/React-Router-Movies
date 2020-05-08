import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, BrowserRouter as Router} from "react-router-dom"
import MovieList from "../src/Movies/MovieList";
import Movie from "../src/Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path="/">
          <MovieList movies={movieList}/>
        </Route>
        <Route path="/movies/:id" render={props => {
          const { id } = props.match.params;
          return <Movie id={id}/>
        }} />
      </div>
    </Router>
  );
};

export default App;
