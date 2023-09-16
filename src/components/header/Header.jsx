import React from 'react';
import imdb from '../../images/imdb.png'
import tomato from '../../images/tomato.png'
import Play from '../../images/Play.png'
import '../header/header.css'


const Header = () => {
    return (
        <div className="header">
        <div className="headerDesc">
            <h1 className="headerMovieTitle">
            John Wick 3 : Parabellum
            </h1>
            <div className="headerMovieRatings">
                <div className='tomatoDiv'>
                <img src={imdb} alt="" />
                <p className='ratings ratingsText'>8.6/10</p>
                </div>
                
                <div className="tomatoDiv">
                    <img src={tomato} alt="" />
                    <span className='ratingsText'>97%</span>
                </div>

                
            </div>

            <p>John Wick is on the run after killing a member of the 
                international assassins' guild, and with a $14 million
                 price tag on his head,
                 he is the target of hit men and women everywhere.</p>
          
          <span className="watchNow">
            <img src={Play} alt="" />
            <a href="/">WATCH TRAILER</a>
          </span>
          
        </div>
        </div> 
    )
}


export default Header;