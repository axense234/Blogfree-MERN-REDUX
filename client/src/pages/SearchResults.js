import React, { useEffect } from "react";
// Components
import SearchResultsTemp from "../components/SearchResults/SearchResultsTemp";
// CSS
import "../styles/SearchResults/SearchResults.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/slices/blogsSlice";
import { getAllAuthors } from "../redux/slices/authorsSlice";
import { useLocation } from "react-router-dom";
import { getJWT, getProfile } from "../redux/slices/generalSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  const { search } = useLocation();

  const query = search.split("=")[1];

  console.log(query);

  useEffect(() => {
    dispatch(getAllBlogs({ query, limit: 75 }));
    dispatch(getAllAuthors({ query, limit: 75 }));
    dispatch(getProfile(jwt));
  }, []);

  return (
    <main className='search-results-section'>
      <div className='search-results-page-content'>
        <SearchResultsTemp query={query} />
      </div>
    </main>
  );
};

export default SearchResults;
