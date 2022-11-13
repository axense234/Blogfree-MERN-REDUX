import React from "react";
// React Icons
import { FaSearch } from "react-icons/fa";
// CSS
import "../../../styles/Navbar/SearchBarMobile/SearchBarMobileBtn.css";

const SearchBarMobileBtn = ({ setShow }) => {
  return (
    <div
      className='sbm-btn'
      onClick={() => {
        console.log("clicked");
        setShow(true);
      }}
    >
      <FaSearch />
    </div>
  );
};

export default SearchBarMobileBtn;
