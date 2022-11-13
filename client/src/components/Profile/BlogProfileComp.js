import React, { useEffect, useState } from "react";
// CSS
import "../../styles/Profile/BlogProfileComp.css";
// Hooks
import useFindReactions from "../../hooks/useFindReactions";
// Components
import Reactions from "../Others/Reactions";
import BlogProfileButtonsComp from "./ProfileButtonsComp";
// Redux
import { useSelector } from "react-redux";
import { getAuthorByIdSelector } from "../../redux/slices/authorsSlice";
import { getBlogById } from "../../redux/slices/blogsSlice";

const BlogProfileComp = ({ id, type, dispatch, jwt }) => {
  const blog = useSelector((state) => getBlogById(state, id));
  const { reactions, title, description, author, category } = blog;
  const [tempReactions, setTempReactions] = useState([]);
  useEffect(() => {
    const { specificBlogReactions } = useFindReactions(
      reactions,
      id,
      dispatch,
      jwt
    );
    setTempReactions(specificBlogReactions);
  }, [reactions, id, jwt]);

  const { username } =
    useSelector((state) => getAuthorByIdSelector(state, author)) ||
    "Default Username";

  return (
    <article className='blog-profile-comp-container'>
      <div className='blog-profile-comp-buttons-container'>
        <Reactions reactions={tempReactions} />
        <BlogProfileButtonsComp
          id={id}
          profileComponentType='Blog'
          profilePageType={type}
        />
      </div>
      <div className='blog-profile-comp-info'>
        <h1>
          {title}
          {category}
        </h1>
        <h2>...by {username || "Username"}</h2>
        <p>{description.slice(0, 200)}...</p>
      </div>
    </article>
  );
};

export default BlogProfileComp;
