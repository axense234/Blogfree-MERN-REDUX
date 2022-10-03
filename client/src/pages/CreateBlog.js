import React from "react";
// Components
import BlogSettings from "../components/Others/BlogSettings";
import BlogPreview from "../components/Others/BlogPreview";
// CSS
import "../styles/Edit-Create-Blog/index.css";
// Data
import { TemplateCreateBlogPreview } from "../data";

const EditBlog = () => {
  return (
    <main className='edit-create-blog-section'>
      <div className='edit-create-blog-content'>
        <BlogSettings type='create' />
        <BlogPreview {...TemplateCreateBlogPreview} />
      </div>
    </main>
  );
};

export default EditBlog;
