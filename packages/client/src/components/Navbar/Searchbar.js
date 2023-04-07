// React
import React, { useState } from "react";
// React Icons
import { FaSearch } from "react-icons/fa";
// CSS
import "../../styles/Navbar/Searchbar.css";
// React Router
import { useLocation, useNavigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { getAllBlogs } from "../../redux/slices/blogsSlice";
import { getAllAuthors } from "../../redux/slices/authorsSlice";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (query) => {
    setQuery(query);
    if (pathname === "/search-results") {
      dispatch(getAllBlogs({ query, limit: 75 }));
      dispatch(getAllAuthors({ query, limit: 75 }));
    }
  };

  return (
    <form
      className='searchbar-container'
      tabIndex='0'
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search-results?searchQuery=${query}`);
      }}
      aria-label='Blogfree Searchbar'
    >
      <input
        type='text'
        aria-label='Search'
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <FaSearch id='fasearch' />
    </form>
  );
};

export default Searchbar;
