import React from "react";
// Components
import BlogSettings from "../components/Others/BlogSettings";
import BlogPreview from "../components/Others/BlogPreview";
// CSS
import "../styles/Edit-Create-Blog/index.css";
// React Router
import { useParams } from "react-router-dom";
// Data
import { TemplateBlogs } from "../data";

const EditBlog = () => {
  const { blogId } = useParams();

  const specificBlog = TemplateBlogs.find((blog) => blog.id === Number(blogId));

  return (
    <main className='edit-create-blog-section'>
      <div className='edit-create-blog-content'>
        <BlogSettings type='create' />
        <BlogPreview {...specificBlog} />
      </div>
    </main>
  );
};

export default EditBlog;
