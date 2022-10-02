import React from "react";
// CSS
import "../../styles/Others/BlogPreview.css";
// Components
import Reactions from "../Others/Reactions";
// Hooks
import useFindReactionsAndCategory from "../../hooks/useFindReactionsAndCategory";

const BlogPreview = ({
  blogReactions,
  blogTitle,
  blogCategory,
  blogAuthor,
  blogDesc,
}) => {
  const { specificBlogReactions, specificBlogCategory } =
    useFindReactionsAndCategory(blogReactions, blogCategory);

  return (
    <section className='blog-preview-container'>
      <h1>Preview</h1>
      <div className='blog-preview-info'>
        <Reactions reactions={specificBlogReactions} />
        <h2>
          {blogTitle}
          {specificBlogCategory}
        </h2>
        <p>...by {blogAuthor}</p>
        <p>{blogDesc.slice(0, 1000)}...</p>
      </div>
    </section>
  );
};

export default BlogPreview;
