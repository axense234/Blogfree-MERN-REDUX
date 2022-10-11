import React from "react";
// CSS
import "../../styles/Profile/BlogProfileComp.css";
// Hooks
import useFindReactionsAndCategory from "../../hooks/useFindReactionsAndCategory";
// Components
import Reactions from "../Others/Reactions";
import BlogProfileButtonsComp from "./ProfileButtonsComp";

const BlogProfileComp = ({
  blogReactions,
  blogTitle,
  blogCategory,
  blogAuthor,
  blogDesc,
  id,
  type,
}) => {
  const { specificBlogReactions, specificBlogCategory } =
    useFindReactionsAndCategory(blogReactions, blogCategory);

  return (
    <article className='blog-profile-comp-container'>
      <div className='blog-profile-comp-buttons-container'>
        <Reactions reactions={specificBlogReactions} />
        <BlogProfileButtonsComp
          favorite={id === 4 ? true : false}
          id={id}
          profileComponentType='Blog'
          profilePageType={type}
        />
      </div>
      <div className='blog-profile-comp-info'>
        <h1>
          {blogTitle}
          {specificBlogCategory}
        </h1>
        <h2>...by {blogAuthor}</h2>
        <p>{blogDesc.slice(0, 200)}...</p>
      </div>
    </article>
  );
};

export default BlogProfileComp;
