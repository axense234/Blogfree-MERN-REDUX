import React, { useEffect, useState } from "react";
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

const ViewBlog = () => {
  const { blogId } = useParams();
  const jwt = useSelector(getJWT);
  const dispatch = useDispatch();
  const [tempReactions, setTempReactions] = useState([]);
  const loadingBlog = useSelector((state) => getSingleBlogStatus(state));
  const loadingAuthorName = useSelector((state) =>
    getAuthorStatusSelector(state)
  );
  const loadingProfileState = useSelector(getProfileStatus);

  console.count("render");

  const blog = useSelector((state) => getBlogById(state, blogId));
  const { username } =
    useSelector((state) => getAuthorByIdSelector(state, blog?.author)) ||
    "Default Username";

  useEffect(() => {
    dispatch(getProfile(jwt));
  }, []);

  useEffect(() => {
    if (loadingBlog === "idle") {
      dispatch(getSingleBlog(blogId));
    }
  }, [loadingBlog]);

  useEffect(() => {
    if (blog) {
      dispatch(getAuthor(blog.author));
    }
  }, [blog]);

  useEffect(() => {
    if (blog) {
      const { specificBlogReactions } = useFindReactions(
        blog.reactions,
        blogId,
        dispatch,
        jwt
      );
      setTempReactions(specificBlogReactions);
      console.log("getting the reactions");
    }
  }, [blog?.reactions]);

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
          <Reactions reactions={tempReactions} id={id} />
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
