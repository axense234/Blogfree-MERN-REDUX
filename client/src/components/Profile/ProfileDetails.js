import React from "react";
// CSS
import "../../styles/Profile/ProfileDetails.css";
// Components
import FavoriteStar from "../Others/FavoriteStar";
import ProfileDetailsInfo from "./ProfileDetailsInfo";
// Redux
import { useSelector } from "react-redux";
import { getAuthorByIdSelector } from "../../redux/slices/authorsSlice";
// React Router
import { useParams } from "react-router-dom";

const ProfileDetails = ({ type }) => {
  const { authorId } = useParams();
  const profile = useSelector((state) =>
    getAuthorByIdSelector(state, authorId)
  );
  // PROFILE PART
  if (type !== "Author") {
    return <ProfileDetailsInfo />;
  } else {
    // AUTHOR PART
    return (
      <div className='profile-details'>
        <FavoriteStar id={profile?.id} />
        <img src={profile?.imgUrl} alt='Default Profile' />
        <ul className='profile-details-text'>
          <h3>{profile?.username}</h3>
          <li>
            <span>Age:</span>
            <p>{profile?.age}</p>
          </li>
          <li>
            <span>Job:</span>
            <p>{profile?.job}</p>
          </li>
          <li>
            <span>Blogs Made:</span>
            <p>{profile?.blogsCount}</p>
          </li>
          <li>
            <span>Stars Count:</span>
            <p>{profile?.blogsCount}</p>
          </li>
          <li>
            <span>Description:</span>
            <p>{profile?.description.slice(0, 400)}...</p>
          </li>
          <li>
            <span>Selected Category:</span>
            <p>{profile?.selectedCategory}</p>
          </li>
        </ul>
        {type !== "Author" && <button>Edit</button>}
      </div>
    );
  }
};

export default ProfileDetails;
