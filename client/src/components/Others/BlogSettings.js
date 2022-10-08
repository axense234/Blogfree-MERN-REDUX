import React, { useState } from "react";
// Data
import { BlogCategoryEmojies } from "../../data";
// CSS
import "../../styles/Others/BlogSettings.css";

const BlogSettings = ({ type }) => {
  const [categoryName, setCategoryName] = useState("");
  return (
    <section className='blog-settings-container'>
      <h1>{type === "edit" ? "Edit Blog" : "Create Blog"}</h1>
      <form className='blog-settings-form'>
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-title'>Blog Title:</label>
          <input
            type='text'
            name='blog-title'
            id='blog-title'
            autoComplete='off'
          />
        </div>
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-category'>Blog Category:</label>
          <select
            name='blog-category'
            id='blog-category'
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          >
            {Object.keys(BlogCategoryEmojies).map((category) => {
              return (
                <option value={category} id={category} key={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-content'>Blog Content:</label>
          <textarea name='blog-content' id='blog-content'></textarea>
        </div>
        <div className='blog-settings-buttons'>
          <button>{type === "edit" ? "Edit" : "Create"}</button>
          <button>Clear</button>
        </div>
      </form>
    </section>
  );
};

export default BlogSettings;
