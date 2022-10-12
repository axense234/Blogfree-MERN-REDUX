import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/SearchResults/AuthorResultComp.css";
// Components
import FavoriteStar from "../Others/FavoriteStar";

const AuthorResultComp = ({
  authorImg,
  authorUsername,
  authorProfileDesc,
  id,
}) => {
  return (
    <article className='author-result-comp-container'>
      <FavoriteStar id={id} />
      <img src={authorImg} alt={authorUsername} />
      <div className='author-result-comp-info'>
        <h1>{authorUsername}</h1>
        <p>{authorProfileDesc.slice(0, 150)}...</p>
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
