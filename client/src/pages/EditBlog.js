import React, { useEffect } from "react";
// Components
import BlogSettings from "../components/Others/BlogSettings";
import BlogPreview from "../components/Others/BlogPreview";
// CSS
import "../styles/Edit-Create-Blog/index.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getJWT, updateBlogSettings } from "../redux/slices/generalSlice";
import { getProfile, clearBlogSettings } from "../redux/slices/generalSlice";
import { getBlogById, getSingleBlog } from "../redux/slices/blogsSlice";
// React Router
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  const { blogId } = useParams();
  const defBlogSettings = {
    title: "",
    category: "",
    description: "",
    author: "",
  };

  const singleBlog =
    useSelector((state) => getBlogById(state, blogId)) || defBlogSettings;

  useEffect(() => {
    dispatch(getProfile(jwt));
    dispatch(clearBlogSettings());
    dispatch(getSingleBlog(blogId));
  }, [blogId, jwt, dispatch]);

  useEffect(() => {
    if (singleBlog?.id) {
      dispatch(updateBlogSettings({ load: singleBlog, mode: "multiple" }));
    }
  }, [singleBlog, dispatch]);

  return (
    <main className='edit-create-blog-section'>
      <div className='edit-create-blog-content'>
        <BlogSettings type='edit' />
        <BlogPreview id={blogId} />
      </div>
    </main>
  );
};

export default EditBlog;
