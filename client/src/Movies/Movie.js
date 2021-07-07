import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const Movie = ({savedList, setSavedList, addToSavedList}) => {
  const [movie, setMovie] = useState();
  const params = useParams();
 
  useEffect(() => {
    const id = params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard
      movie={movie}
      savedList={savedList}
      setSavedList={setSavedList}
      addToSavedList={addToSavedList}/>
  );
}

export default Movie;
