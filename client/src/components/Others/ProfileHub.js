import React from "react";
// CSS
import "../../styles/Profile/ProfileHub.css";
// Data
import { TemplateBlogs, TemplateAuthors } from "../../data";
// Components
import AuthorProfileComp from "../Profile/AuthorProfileComp";
import BlogProfileComp from "../Profile/BlogProfileComp";
// React Router
import { Link, useParams } from "react-router-dom";

const ProfileHub = ({ type }) => {
  let renderedTemplateBlogs = TemplateBlogs;
  const { authorId } = useParams();

  if (type === "Author") {
    let specificAuthor = TemplateAuthors.find(
      (author) => author.id === Number(authorId)
    );
    renderedTemplateBlogs = TemplateBlogs.filter(
      (blog) => blog.blogAuthor === specificAuthor.authorUsername
    );
  }

  const renderedItems = renderedTemplateBlogs
    .map((blog) => {
      return <BlogProfileComp key={blog.id} {...blog} type={type} />;
    })
    .concat(
      TemplateAuthors.map((author) => {
        return <AuthorProfileComp key={author.authorUsername} {...author} />;
      })
    );

  return (
    <div className='profile-hub'>
      <nav className='profile-hub-buttons'>
        <div className='profile-hub-choices'>
          <button>Blogs</button>
          <button>Authors</button>
          <Link to='/blogs/create-blog'>Create Blog</Link>
        </div>
        <div className='profile-hub-input'>
          <input type='text' />
          <button>Sort By</button>
          <button>Category</button>
        </div>
      </nav>
      <section className='profile-hub-content'>{renderedItems}</section>
    </div>
  );
};

export default ProfileHub;
