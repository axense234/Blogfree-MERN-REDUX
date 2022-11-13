import React from "react";
// Components
import AuthorResultComp from "./AuthorResultComp";
import BlogResultComp from "./BlogResultComp";
import Loading from "../Others/Loading";
// CSS
import "../../styles/SearchResults/SearchResultsContent.css";
// Redux
import { useSelector } from "react-redux";
import {
  getAllBlogIds,
  getAllBlogsStatus,
} from "../../redux/slices/blogsSlice";
import {
  getAllAuthorsIdsSelector,
  getAllAuthorsStatusSelector,
} from "../../redux/slices/authorsSlice";

const SearchResultsContent = ({ query }) => {
  const blogs = useSelector(getAllBlogIds);
  const authors = useSelector(getAllAuthorsIdsSelector);
  const loadingBlog = useSelector(getAllBlogsStatus);
  const loadingAuthor = useSelector(getAllAuthorsStatusSelector);

  let renderedResults = [];

  console.count("render");

  if (loadingBlog === "succeded" && loadingAuthor === "succeded") {
    if (blogs.length < 1 && authors.length < 1) {
      return <h1 className='no-blogs-authors'>No blogs/authors found</h1>;
    }
    renderedResults = blogs
      .map((id) => {
        return <BlogResultComp blogId={id} key={id} />;
      })
      .concat(
        authors.map((id) => {
          return <AuthorResultComp authorId={id} key={id} />;
        })
      );
  } else {
    return <Loading type='loading full-blog' size={35} />;
  }

  return (
    <div className='search-results-temp-content'>
      <h1>Results for {query}</h1>
      <div className='search-results-temp-content-container'>
        {renderedResults}
      </div>
    </div>
  );
};

export default SearchResultsContent;
