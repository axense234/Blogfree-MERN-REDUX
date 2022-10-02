import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/SearchResults/BlogResultComp.css";
// Hooks
import useFindReactionsAndCategory from "../../hooks/useFindReactionsAndCategory";
// Components
import Reactions from "../Others/Reactions";
import FavoriteStar from "../Others/FavoriteStar";

const BlogResultComp = ({
  blogReactions,
  blogTitle,
  blogCategory,
  blogAuthor,
  blogDesc,
  id,
}) => {
  const { specificBlogReactions, specificBlogCategory } =
    useFindReactionsAndCategory(blogReactions, blogCategory);

  return (
    <article className='blog-result-comp-container'>
      <FavoriteStar id={id} />
      <Reactions reactions={specificBlogReactions} />
      <div className='blog-result-comp-info'>
        <h1>
          {blogTitle}
          {specificBlogCategory}
        </h1>
        <h2>...by {blogAuthor}</h2>
        <p>{blogDesc.slice(0, 200)}...</p>
      </div>
      <Link to={`/blogs/view-blog/${id}`}>Read More</Link>
    </article>
  );
};

export default BlogResultComp;
