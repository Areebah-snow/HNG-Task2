import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import './search.css'

const SearchResults = ({searchResults, onClose}) => {
    return (
        <div className="search-results-container">
        <button onClick={onClose} className="close-button">X</button> {/* Add a close button */}
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    )
}


export default SearchResults;