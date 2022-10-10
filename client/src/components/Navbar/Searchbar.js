import React from "react";
// React Icons
import { FaSearch } from "react-icons/fa";
// CSS
import "../../styles/Navbar/Searchbar.css";
// React Router
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  return (
    <form
      className='searchbar-container'
      tabIndex='0'
      onSubmit={(e) => {
        e.preventDefault();
        navigate("search-results");
      }}
      aria-label={"Blogfree Searchbar"}
    >
      <input type='text' aria-label='Search' />
      <FaSearch id='fasearch' />
    </form>
  );
};

export default Searchbar;
