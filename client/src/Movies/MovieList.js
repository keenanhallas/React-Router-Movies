import React from 'react';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';

const MovieList = ({ movies, savedList, setSavedList, addToSavedList }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails
            movie={movie} 
            savedList={savedList}
            setSavedList={setSavedList}
            addToSavedList={addToSavedList} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie, savedList, setSavedList, addToSavedList }) {
  return (
    <MovieCard
      movie={movie}
      savedList={savedList}
      setSavedList={setSavedList}
      addToSavedList={addToSavedList}/>
  );
}

export default MovieList;
