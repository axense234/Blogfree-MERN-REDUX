import React from "react";
// React Icons
import { AiFillStar, AiOutlineStar, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
// CSS
import "../../styles/Profile/ProfileButtonsComp.css";
// React Router
import { Link } from "react-router-dom";

const ProfileButtonsComp = ({ favorite, type, id }) => {
  return (
    <div className='blog-profile-comp-buttons'>
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
      {type === "Author" ? null : (
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
      )}
      {type == "Author" ? (
        <Link
          to={`/authors/view-author/${id}`}
          className='view-blog-icon'
          aria-label='View Full Blog Icon'
        >
          <MdPreview />
        </Link>
      ) : (
        <Link
          to={`/blogs/view-blog/${id}`}
          className='view-blog-icon'
          aria-label='View Full Blog Icon'
        >
          <MdPreview />
        </Link>
      )}
    </div>
  );
};

export default ProfileButtonsComp;
