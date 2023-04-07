import React from "react";
// React Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getSbmQueryInput,
  updateSbmQueryInput,
} from "../../../redux/slices/generalSlice";
// CSS
import "../../../styles/Navbar/SearchBarMobile/SearchBarMobileInput.css";
// React Router
import { useNavigate } from "react-router-dom";

const SearchBarMobileInput = ({ setShow }) => {
  const dispatch = useDispatch();
  const input = useSelector(getSbmQueryInput);
  const navigate = useNavigate();

  const handleOnChangeInput = (value) => {
    dispatch(updateSbmQueryInput(value));
  };

  const handleSubmitInput = (e) => {
    e.preventDefault();
    navigate(`/search-results/?searchQuery=${input}`);
    setShow(false);
  };

  return (
    <article className='search-bar-mobile-container'>
      <button id='sbm-goback'>
        <AiOutlineArrowLeft onClick={() => setShow(false)} />
      </button>
      <form className='sbm-form' onSubmit={(e) => handleSubmitInput(e)}>
        <input
          type='text'
          id='sbm-input'
          value={input}
          onChange={(e) => handleOnChangeInput(e.target.value)}
        />
        <label htmlFor='sbm-input'>
          <FaSearch />
        </label>
      </form>
      <button id='sbm-clear'>Clear</button>
    </article>
  );
};

export default SearchBarMobileInput;
