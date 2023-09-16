import React from 'react';
import {useState, useEffect} from 'react'
import SearchResults from './SearchResults';


const Search = ({apiKey}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false); // New state for controlling visibility
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
  // Define the handleSearch function
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    try {
      const response = await fetch(
        `${API_SEARCH}?api_key=${apiKey}&query=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.results);
      setShowSearchResults(true); // Show the search results
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    setShowSearchResults(false); // Hide the search results when the search term changes
  }, [searchTerm]);

  return (
    <div>
      <form action="" className="navMiddle" onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="What would you like to watch?"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      {showSearchResults && (
        <SearchResults
          searchResults={searchResults}
          onClose={() => setShowSearchResults(false)}
        />
      )}{" "}
      {/* Conditionally render the SearchResults component */}
    </div>
    )
}


export default Search;