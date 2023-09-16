import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {AiFillPlayCircle } from 'react-icons/ai'
import '../movieDetails/moviedetails.css'

const MovieDetails = () => {
    const [movieDetails, setmovieDetails] = useState([]);

    const { id } = useParams();
    const API_KEY = '1ef91e2e402f45a12493311c6d974d7c'
    const fetchMovieDetails = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((json) => setmovieDetails(json));
    };
  
    useEffect(() => {
      fetchMovieDetails();
      window.scrollTo(0, 0);
      // eslint-disable-next-line
    }, []);
  
    console.log(movieDetails);


    return (
      <>
       <div className="single-movie">
        <div className="sidebar">
          <div className="pi-20">
            <div className="logo">
              <img className="logo_image" src="/images/tv.png" alt="logo" />

              <h4>MovieBox</h4>
            </div>
          </div>

          <div className="navigation ">
            <div className="side-nav-links">
              <img src="/images/home.png" alt="home" />
              <p>Home</p>
            </div>
            <div className="side-nav-links active">
              <img src="/images/Movie Projector.png" alt="" />
              <p>Movies</p>
            </div>
            <div className="side-nav-links ">
              <img src="/images/TV Show.png" alt="tvseries" />
              <p>TV Series</p>
            </div>
            <div className="side-nav-links">
              <img src="/images/Calendar.png" alt="upcoming" />
              <p>Upcoming</p>
            </div>
          </div>

          <div className="pi-20">
            <div className="nav-desc">
              <div className="details">
                <p>Play movie quizes and earn free tickets</p>
                <p>50k people are playing now</p>
                <button className="button-2">Start Playing</button>
              </div>
            </div>
          </div>

          <div className="pi-20">
            <div className="side-nav-links">
              <img src="/images/Logout.png" alt="logout" />
              <p>Log out</p>
            </div>
          </div>
        </div>

        <div className="movie">
          <div className="hmm">
            <img
              className="main-movie"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
              alt="mov"
            />

            <div className="play">
              <AiFillPlayCircle className="play-icon" />
            </div>
          </div>
          <div className="movie-page-details">
            <div className="side1">
              <div className="movie-page-title">
                <h2 data-testid="movie-title">{movieDetails.original_title}</h2>
                <h2 data-testid="movie-release-date">
                  • {movieDetails.release_date} •
                </h2>
                <p data-testid="movie-runtime">{movieDetails.runtime}Minutes</p>
                <p>Action</p>
                <p>Drama</p>
              </div>
              <div>
                <p className="movie-desc" data-testid="movie-overview">
                  {movieDetails.overview}
                </p>
              </div>
              <div className="fl-1">
                <div className="fl">
                  <p>Visit Site :</p>
                  <span>{movieDetails.homepage}</span>
                </div>
                <div className="fl">
                  <p>Status :</p> <span>{movieDetails.status}</span>
                </div>
                <div className="fl">
                  <p>Language :</p>
                  <span>{movieDetails.original_language}</span>
                </div>
              </div>
              <div className="categories">
                <button className="button-1">
                  Top rated movie #{movieDetails.popularity}
                </button>
                <select name="awards" id="awards">
                  <option value="awards">Awards 9 Nominations</option>
                </select>
              </div>
            </div>
            <div className="side2">
              <div className="flex">
                <img src="/images/Star.png" alt="" />
                <p>8.5 | 350k</p>
              </div>
              <div className="buttons">
                <button className="button-1">
                  <img
                    src="/images/Two Tickets.png"
                    className="button-icon"
                    alt="ticket"
                  />
                  See Showtimes
                </button>
                <button className="button-3">
                  <img
                    src="/images/List.png"
                    className="button-icon"
                    alt="button"
                  />
                  More Watch Options
                </button>
              </div>
              <div>
                <img
                  src="/images/others.png"
                  className="others-image"
                  alt="others"
                />
                <div className="others">
                  <img src="/images/List-2.png" alt="list" />
                  <p>The Best Movies and Shows in September</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}


export default MovieDetails;