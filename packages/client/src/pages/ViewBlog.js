// React
import React, { useEffect } from "react";
// Components
import GreenLine from "../components/Others/GreenLine";
import Reactions from "../components/Others/Reactions";
import FavoriteStar from "../components/Others/FavoriteStar";
import Loading from "../components/Others/Loading";
// React Router
import { Link, useParams } from "react-router-dom";
// Hooks
import useFindReactions from "../hooks/useFindReactions";
// CSS
import "../styles/ViewBlog/ViewBlog.css";
import "../styles/Others/Loading.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getSingleBlogStatus, getSingleBlog } from "../redux/slices/blogsSlice";
import { getAuthor, getAuthorByIdSelector } from "../redux/slices/authorsSlice";
import { getBlogById } from "../redux/slices/blogsSlice";
import { getAuthorStatusSelector } from "../redux/slices/authorsSlice";
import {
  getJWT,
  getProfile,
  getProfileStatus,
} from "../redux/slices/generalSlice";
// Data
import { TemplateCreateBlogPreview } from "../data";

const ViewBlog = () => {
  const { blogId } = useParams();
  const jwt = useSelector(getJWT);
  const dispatch = useDispatch();
  const loadingBlog = useSelector((state) => getSingleBlogStatus(state));
  const loadingAuthorName = useSelector((state) =>
    getAuthorStatusSelector(state)
  );
  const loadingProfileState = useSelector(getProfileStatus);

  const blog = useSelector((state) => getBlogById(state, blogId));
  const { username } =
    useSelector((state) => getAuthorByIdSelector(state, blog?.author)) ||
    "Default Username";

  useEffect(() => {
    dispatch(getProfile(jwt));
  }, [dispatch, jwt]);

  useEffect(() => {
    if (loadingBlog === "idle") {
      dispatch(getSingleBlog(blogId));
    }
  }, [loadingBlog, blogId, dispatch]);

  useEffect(() => {
    if (blog) {
      dispatch(getAuthor(blog.author));
    }
  }, [blog, dispatch]);

  const { specificBlogReactions } = useFindReactions(
    blog?.reactions || TemplateCreateBlogPreview.reactions,
    blogId,
    dispatch,
    jwt
  );

  if (
    loadingBlog === "pending" ||
    loadingBlog === "idle" ||
    loadingProfileState === "pending" ||
    loadingProfileState === "idle"
  ) {
    return (
      <main className='view-blog-section'>
        <div className='view-blog-content'>
          <GreenLine />
          <Loading type='loading full-blog' size={35} />
          <GreenLine />
        </div>
      </main>
    );
  }
  const { title, category, author, description, id } = blog;

  return (
    <main className='view-blog-section'>
      <div className='view-blog-content'>
        <FavoriteStar id={id} />
        <GreenLine />
        <div className='view-blog-info'>
          <Reactions reactions={specificBlogReactions} id={id} />
          <h1>
            {title}
            {category}
          </h1>
          <p>
            ...by{" "}
            <Link to={`/authors/view-author/${author}`}>
              {loadingAuthorName === "pending" || loadingAuthorName === "idle"
                ? "Loading..."
                : username}
            </Link>
          </p>
          <p>{description}</p>
        </div>
        <GreenLine />
      </div>
    </main>
  );
};

export default ViewBlog;
