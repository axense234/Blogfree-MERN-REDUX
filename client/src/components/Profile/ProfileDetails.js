import React from "react";
// CSS
import "../../styles/Profile/ProfileDetails.css";
// Data
import { TemplateAuthors } from "../../data";
// React Router
import { useParams } from "react-router-dom";
// Components
import FavoriteStar from "../Others/FavoriteStar";

const ProfileDetails = ({ type }) => {
  let specificAuthor = TemplateAuthors.find((author) => author.id === 3);
  const { authorId } = useParams();

  if (!specificAuthor) {
    throw new Error("wtf bruh");
  }

  if (type === "Author") {
    specificAuthor = TemplateAuthors.find(
      (author) => author.id === Number(authorId)
    );
  }

  const {
    authorUsername,
    authorAge,
    authorJob,
    authorBlogsCount,
    authorProfileDesc,
    authorImg,
    authorSelectedCategories,
  } = specificAuthor;

  const categories = Object.values(authorSelectedCategories);

  return (
    <div className='profile-details'>
      <FavoriteStar />
      {authorImg ? (
        <img src={authorImg} alt='Default Profile' />
      ) : (
        <img
          src='https://res.cloudinary.com/birthdayreminder/image/upload/v1664019172/115-1150152_default-profile-picture-avatar-png-green_1.png_nuwc0t.png'
          alt='Default Profile'
        />
      )}
      <ul className='profile-details-text'>
        <h3>{authorUsername}</h3>
        <li>
          <span>Age:</span>
          <p>{authorAge}</p>
        </li>
        <li>
          <span>Job:</span>
          <p>{authorJob}</p>
        </li>
        <li>
          <span>Blogs Made:</span>
          <p>{authorBlogsCount}</p>
        </li>
        <li>
          <span>Description:</span>
          <p>{authorProfileDesc.slice(0, 400)}...</p>
        </li>
        <li>
          <span>Selected Categories:</span>
          <p>{categories}</p>
        </li>
      </ul>
      {type !== "Author" && <button>Edit</button>}
    </div>
  );
};

export default ProfileDetails;
