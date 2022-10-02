import React from "react";
// CSS
import "../../styles/SearchResults/SearchResultsContent.css";
// Data
import { TemplateAuthors, TemplateBlogs } from "../../data";
import AuthorResultComp from "./AuthorResultComp";
import BlogResultComp from "./BlogResultComp";

const SearchResultsContent = () => {
  const renderedResults = TemplateAuthors.map((author) => {
    return <AuthorResultComp {...author} key={author.authorUsername} />;
  }).concat(
    TemplateBlogs.map((blog) => {
      return <BlogResultComp {...blog} key={blog.id} />;
    })
  );

  return (
    <div className='search-results-temp-content'>
      <h1>Results for Search Result</h1>
      <div className='search-results-temp-content-container'>
        {renderedResults}
      </div>
    </div>
  );
};

export default SearchResultsContent;
