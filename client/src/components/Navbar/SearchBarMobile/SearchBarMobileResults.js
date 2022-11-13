import React from "react";
// CSS
import "../../../styles/Navbar/SearchBarMobile/SearchBarMobileResults.css";
// Components
import Loading from "../../Others/Loading";
// Redux
import { useSelector } from "react-redux";
import {
  getAllAuthorsSelector,
  getAllAuthorsStatusSelector,
} from "../../../redux/slices/authorsSlice";
import {
  getAllBlogsSelector,
  getAllBlogsStatus,
} from "../../../redux/slices/blogsSlice";

const SearchBarMobileResults = () => {
  const blogs = useSelector(getAllBlogsSelector);
  const authors = useSelector(getAllAuthorsSelector);
  const loadingBlogs = useSelector(getAllBlogsStatus);
  const loadingAuthors = useSelector(getAllAuthorsStatusSelector);

  const renderedRecommendations = blogs
    .map(({ title, id }) => {
      return <li key={id}>{title}</li>;
    })
    .concat(
      authors.map(({ username, id }) => {
        return <li key={id}>{username}</li>;
      })
    );

  if (
    loadingBlogs === "idle" ||
    loadingBlogs === "pending" ||
    loadingAuthors === "idle" ||
    loadingAuthors === "pending"
  ) {
    return <Loading type={"loading sbm-menu"} size={35} />;
  }

  return <ul className='sbm-results'>{renderedRecommendations}</ul>;
};

export default SearchBarMobileResults;
