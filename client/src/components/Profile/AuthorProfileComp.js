import React from "react";
// Components
import AuthorProfileButtonsComp from "./ProfileButtonsComp";
// CSS
import "../../styles/Profile/AuthorProfileComp.css";

const AuthorProfileComp = ({
  imgUrl,
  username,
  description,
  job,
  id,
  type,
}) => {
  return (
    <article className='author-profile-comp-container'>
      <div className='author-profile-comp-buttons'>
        <img src={imgUrl} alt={username} />
        <AuthorProfileButtonsComp
          favorite={true}
          id={id}
          profileComponentType='Author'
          profilePageType={type}
        />
      </div>
      <div className='author-profile-comp-info'>
        <h1>{username}</h1>
        <p>{job}</p>
      </div>
      <p>{description.slice(130)}...</p>
    </article>
  );
};

export default AuthorProfileComp;
