import React, { useEffect } from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/SearchResults/BlogResultComp.css";
// Hooks
import useFindReactions from "../../hooks/useFindReactions";
// Components
import Reactions from "../Others/Reactions";
import FavoriteStar from "../Others/FavoriteStar";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthor,
  getAuthorByIdSelector,
} from "../../redux/slices/authorsSlice";
import { getBlogById } from "../../redux/slices/blogsSlice";
import { getJWT } from "../../redux/slices/generalSlice";

const BlogResultComp = ({ blogId }) => {
  const dispatch = useDispatch();
  const { reactions, title, category, author, description, id } = useSelector(
    (state) => getBlogById(state, blogId)
  );
  const jwt = useSelector(getJWT);
  const blogAuthor = useSelector((state) =>
    getAuthorByIdSelector(state, author)
  );

  const { specificBlogReactions } = useFindReactions(
    reactions,
    id,
    dispatch,
    jwt
  );

  useEffect(() => {
    if (!blogAuthor) {
      dispatch(getAuthor(author));
    }
  }, [dispatch, author, blogAuthor]);

  return (
    <article className='blog-result-comp-container'>
      <FavoriteStar id={id} />
      <Reactions reactions={specificBlogReactions} />
      <div className='blog-result-comp-info'>
        <h1>
          {title}
          {category}
        </h1>
        <h2>...by {blogAuthor?.username || "Loading..."}</h2>
        <p>{description.slice(0, 200)}...</p>
      </div>
      <Link
        to={`/blogs/view-blog/${id}`}
        aria-label='Link to Full Blog Details'
      >
        Read More
      </Link>
    </article>
  );
};

export default BlogResultComp;
