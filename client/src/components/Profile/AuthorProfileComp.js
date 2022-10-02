import React from "react";
// Components
import AuthorProfileButtonsComp from "./ProfileButtonsComp";
// CSS
import "../../styles/Profile/AuthorProfileComp.css";

const AuthorProfileComp = ({
  authorImg,
  authorUsername,
  authorProfileDesc,
  authorJob,
  id,
}) => {
  return (
    <article className='author-profile-comp-container'>
      <div className='author-profile-comp-buttons'>
        <img src={authorImg} alt={authorUsername} />
        <AuthorProfileButtonsComp
          favorite={id === 1 ? true : false}
          type='Author'
          id={id}
        />
      </div>
      <div className='author-profile-comp-info'>
        <h1>{authorUsername}</h1>
        <p>{authorJob}</p>
      </div>
      <p>{authorProfileDesc.slice(130)}...</p>
    </article>
  );
};

export default AuthorProfileComp;
