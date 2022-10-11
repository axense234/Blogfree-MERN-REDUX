import React from "react";
// React Icons
import { AiFillStar, AiOutlineStar, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
// CSS
import "../../styles/Profile/ProfileButtonsComp.css";
// React Router
import { Link } from "react-router-dom";

const ProfileButtonsComp = ({
  favorite,
  profileComponentType,
  profilePageType,
  id,
}) => {
  const linkDestination =
    profileComponentType === "Blog"
      ? `/blogs/view-blog/${id}`
      : `/authors/view-author/${id}`;
  return (
    <div className='blog-profile-comp-buttons'>
      {/* Favorite */}
      {favorite ? (
        <AiFillStar
          className='star-fill-blog-icon'
          aria-label='Favorite Star Full'
        />
      ) : (
        <AiOutlineStar
          className='star-outline-blog-icon'
          aria-label='Favorite Star Empty'
        />
      )}
      {/* Options */}
      {profilePageType === "Profile" ? (
        <>
          <Link
            to={`/blogs/edit-blog/${id}`}
            className='edit-blog-icon'
            aria-label='Edit Blog Icon'
          >
            <AiFillEdit />
          </Link>
          <BsFillTrashFill
            className='trash-blog-icon'
            aria-label='Trash Blog Icon'
          />
        </>
      ) : null}
      {/* Preview */}
      <Link
        to={linkDestination}
        className='view-blog-icon'
        aria-label='View Full Blog Icon'
      >
        <MdPreview />
      </Link>
    </div>
  );
};

export default ProfileButtonsComp;
