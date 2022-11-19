import React, { useEffect } from "react";
// React Icons
import SearchBarMobileInput from "./SearchBarMobileInput";
import SearchBarMobileResults from "./SearchBarMobileResults";
// CSS
import "../../../styles/Navbar/SearchBarMobile/SearchBarMobile.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../../redux/slices/blogsSlice";
import { getAllAuthors } from "../../../redux/slices/authorsSlice";
import { getSbmQueryInput } from "../../../redux/slices/generalSlice";

const SearchBarMobile = ({ setShow, sbmRef }) => {
  const dispatch = useDispatch();
  const input = useSelector(getSbmQueryInput);

  useEffect(() => {
    dispatch(getAllBlogs({ query: input, limit: 25 }));
    dispatch(getAllAuthors({ query: input, limit: 25 }));
  }, [input, dispatch]);

  return (
    <section className='sbm' ref={sbmRef}>
      <SearchBarMobileInput setShow={setShow} />
      <SearchBarMobileResults />
    </section>
  );
};

export default SearchBarMobile;
