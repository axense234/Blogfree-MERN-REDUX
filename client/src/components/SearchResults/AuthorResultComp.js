import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/SearchResults/AuthorResultComp.css";
// Components
import FavoriteStar from "../Others/FavoriteStar";
// Redux
import { useSelector } from "react-redux";
import { getAuthorByIdSelector } from "../../redux/slices/authorsSlice";

const AuthorResultComp = ({ authorId }) => {
  const { imgUrl, username, description, id } = useSelector((state) =>
    getAuthorByIdSelector(state, authorId)
  );

  return (
    <article className='hidden author-result-comp-container'>
      <FavoriteStar id={id} />
      <img src={imgUrl} alt={username} />
      <div className='author-result-comp-info'>
        <h1>{username}</h1>
        <p>{description.slice(0, 150)}...</p>
      </div>
      <Link
        to={`/authors/view-author/${id}`}
        aria-label='Link to Full Author Details'
      >
        Read More
      </Link>
    </article>
  );
};

export default AuthorResultComp;
