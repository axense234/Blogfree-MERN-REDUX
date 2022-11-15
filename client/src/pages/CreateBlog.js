import React, { useEffect } from "react";
// Components
import BlogSettings from "../components/Others/BlogSettings";
import BlogPreview from "../components/Others/BlogPreview";
// CSS
import "../styles/Edit-Create-Blog/index.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getJWT } from "../redux/slices/generalSlice";
import { getProfile, clearBlogSettings } from "../redux/slices/generalSlice";

const EditBlog = () => {
  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  useEffect(() => {
    dispatch(getProfile(jwt));
    dispatch(clearBlogSettings());
  }, [dispatch, jwt]);
  return (
    <main className='edit-create-blog-section'>
      <div className='edit-create-blog-content'>
        <BlogSettings type='create' />
        <BlogPreview />
      </div>
    </main>
  );
};

export default EditBlog;
