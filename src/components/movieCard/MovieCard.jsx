import React from 'react';
import imdb from '../../images/imdb.png'
import '../movieCard/moviecard.css'
import {Link } from 'react-router-dom'

const MovieCard = ({movies}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    const encodedId = encodeURIComponent(movies.id);
     const url = `/movies/${encodedId}`

    return (


      <Link to={url} data-testid="movie-card" className="movie-card">
      <div className="poster">
        <img
          data-testid="movie-poster"
          src={API_IMG + movies.poster_path}
          alt={movies.title}
          className="movie-poster"
        />
      </div>
      <div className="movie-details">
        <h2 data-testid="movie-title">{movies.title}</h2>
        <p data-testid="movie-release-date">
          Release Date: {movies.releaseDate || movies.release_date}
        </p>
        <div className="rating">
          <div className="imdb">
            <img src={imdb} alt="IMDB Rating" />
            <span>{movies.imdb_rating}</span>
          </div>
        </div>
        <p data-testid="vote" className="vote">
          {movies.voteAverage || movies.vote_average}
        </p>
      </div>
    </Link>
    )
}


export default MovieCard;