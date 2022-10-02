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
        <AiFillStar className='star-fill-blog-icon' />
      ) : (
        <AiOutlineStar className='star-outline-blog-icon' />
      )}
      {type === "Author" ? null : (
        <>
          <Link to={`/blogs/edit-blog/${id}`} className='edit-blog-icon'>
            <AiFillEdit />
          </Link>
          <BsFillTrashFill className='trash-blog-icon' />
        </>
      )}
      <Link to={`/blogs/view-blog/${id}`} className='view-blog-icon'>
        <MdPreview />
      </Link>
    </div>
  );
};

export default ProfileButtonsComp;
