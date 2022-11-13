import React from "react";
// Data
import { BlogCategoryEmojies } from "../../data";
// CSS
import "../../styles/Others/BlogSettings.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getBlogSettingsSelector,
  getJWT,
} from "../../redux/slices/generalSlice";
import { updateBlogSettings } from "../../redux/slices/generalSlice";
import { createBlog, updateBlog } from "../../redux/slices/blogsSlice";
import { useParams } from "react-router-dom";

const BlogSettings = ({ type }) => {
  const dispatch = useDispatch();
  const blogSettings = useSelector(getBlogSettingsSelector);
  const jwt = useSelector(getJWT);
  const { blogId } = useParams();

  const handleBlogAction = () => {
    if (type === "create") {
      try {
        console.log("handle blog submit");
        dispatch(createBlog({ newBlog: blogSettings, jwt: jwt })).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        window.location.href = "/profile";
      }
    } else if (type === "edit") {
      try {
        console.log("handle blog submit");
        dispatch(
          updateBlog({ newBlog: blogSettings, jwt: jwt, id: blogId })
        ).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        window.location.href = "/profile";
      }
    }
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    handleBlogAction();
  };

  return (
    <section className='blog-settings-container'>
      <h1>{type === "edit" ? "Edit Blog" : "Create Blog"}</h1>
      <form
        className='blog-settings-form'
        onSubmit={(e) => {
          handleBlogSubmit(e);
        }}
      >
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-title'>Blog Title:</label>
          <input
            type='text'
            name='blog-title'
            id='blog-title'
            autoComplete='off'
            value={blogSettings.title}
            onChange={(e) => {
              dispatch(
                updateBlogSettings({ value: e.target.value, type: "title" })
              );
            }}
            maxLength={40}
          />
        </div>
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-category'>Blog Category:</label>
          <select
            name='blog-category'
            id='blog-category'
            value={blogSettings.category}
            onChange={(e) => {
              dispatch(
                updateBlogSettings({
                  value: e.target.value,
                  type: "category",
                })
              );
            }}
          >
            {Object.entries(BlogCategoryEmojies).map(([key, value]) => {
              return (
                <option value={value} id={key} key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className='blog-settings-form-div'>
          <label htmlFor='blog-content'>Blog Content:</label>
          <textarea
            name='blog-content'
            id='blog-content'
            value={blogSettings.description}
            onChange={(e) => {
              console.log(e.target.value.length);
              dispatch(
                updateBlogSettings({
                  value: e.target.value,
                  type: "description",
                })
              );
            }}
          />
        </div>
        <div className='blog-settings-buttons'>
          <button type='submit'>{type === "edit" ? "Edit" : "Create"}</button>
          <button type='reset'>Clear</button>
        </div>
      </form>
    </section>
  );
};

export default BlogSettings;
