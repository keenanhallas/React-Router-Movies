import React from 'react';
import { Link } from "react-router-dom";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`}> {/*Why does this whole thing need to be wrapped in curlies?*/}
          <MovieDetails key={movie.id} movie={movie} />
          {console.log(movie.id)}
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
