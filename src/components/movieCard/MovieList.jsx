import React from 'react';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios'

const MovieList = () => {
    // const API_KEY = process.env.REACT_APP_API_KEY;

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState('');
  
    useEffect(() => {

      const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=1ef91e2e402f45a12493311c6d974d7c`;
  
            // Fetch movie data from the API
            axios
        .get(API_URL)
        .then((response) => {
            setMovies(response.data.results);
            console.log("Fetched movie data:", response.data.results);
        })
        .catch((error) => {
            console.error('Error fetching movies:', error);
            if (error.response) {
            // Log the detailed error response
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            }
        });

 }, []);

    return (
        <div className="featured">
        <h1>Featured Movies</h1>
        <div className="movie-list">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movies={movie} />
          ))}
        </div>
      </div>
    )
}


export default MovieList;