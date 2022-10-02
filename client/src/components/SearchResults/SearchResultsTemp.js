import React from "react";
// Components
import GreenLine from "../Others/GreenLine";
import SearchResultsContent from "./SearchResultsContent";
// CSS
import "../../styles/SearchResults/SearchResultsTemp.css";

const SearchResultsTemp = () => {
  return (
    <div className='search-results-temp'>
      <GreenLine />
      <SearchResultsContent />
      <GreenLine />
    </div>
  );
};

export default SearchResultsTemp;
