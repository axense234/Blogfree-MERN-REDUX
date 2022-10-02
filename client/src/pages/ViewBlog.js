import React from "react";
// Components
import GreenLine from "../components/Others/GreenLine";
import Reactions from "../components/Others/Reactions";
import FavoriteStar from "../components/Others/FavoriteStar";
// React Router
import { useParams, Link } from "react-router-dom";
// Data
import { TemplateBlogs } from "../data";
// Hooks
import useFindReactionsAndCategory from "../hooks/useFindReactionsAndCategory";
// CSS
import "../styles/ViewBlog/ViewBlog.css";

const ViewBlog = () => {
  const { blogId } = useParams();

  const specificBlog = TemplateBlogs.find((blog) => blog.id === Number(blogId));

  if (!specificBlog) {
    throw new Error("No blog found with the id in the params.");
  }

  const { blogReactions, blogTitle, blogCategory, blogAuthor, blogDesc } =
    specificBlog;

  const { specificBlogReactions, specificBlogCategory } =
    useFindReactionsAndCategory(blogReactions, blogCategory);

  return (
    <main className='view-blog-section'>
      <div className='view-blog-content'>
        <FavoriteStar />
        <GreenLine />
        <div className='view-blog-info'>
          <Reactions reactions={specificBlogReactions} />
          <h1>
            {blogTitle}
            {specificBlogCategory}
          </h1>
          <p>
            ...by <Link>{blogAuthor}</Link>
          </p>
          <p>{blogDesc}</p>
        </div>
        <GreenLine />
      </div>
    </main>
  );
};

export default ViewBlog;
