import React from "react";
// Components
import SearchResultsTemp from "../components/SearchResults/SearchResultsTemp";
// CSS
import "../styles/SearchResults/SearchResults.css";

const SearchResults = () => {
  return (
    <main className='search-results-section'>
      <div className='search-results-page-content'>
        <SearchResultsTemp />
      </div>
    </main>
  );
};

export default SearchResults;
