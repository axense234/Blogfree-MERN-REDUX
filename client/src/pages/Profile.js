import React, { useEffect } from "react";
// Components
import NoProfile from "../components/Profile/NoProfile";
import ProfileDetails from "../components/Profile/ProfileDetails";
import ProfileHub from "../components/Others/ProfileHub";
import Loading from "../components/Others/Loading";
// CSS
import "../styles/Profile/Profile.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getJWT,
  getPhInput,
  getProfile,
  getProfileStatus,
} from "../redux/slices/generalSlice";
import {
  clearBlogs,
  getAllBlogs,
  getAllBlogsStatus,
} from "../redux/slices/blogsSlice";
import {
  getAllAuthors,
  getAllAuthorsStatusSelector,
} from "../redux/slices/authorsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  const loadingAllBlogsState = useSelector(getAllBlogsStatus);
  const loadingAuthorsState = useSelector(getAllAuthorsStatusSelector);
  const loadingProfileState = useSelector(getProfileStatus);
  const input = useSelector(getPhInput);
  // Remove user's access from profile page if the user has no jwt token in localStorage
  if (!jwt) {
    return <NoProfile />;
  }

  useEffect(() => {
    dispatch(getProfile(jwt));
    dispatch(clearBlogs());
    dispatch(getAllAuthors({ query: input, limit: 100 }));
    dispatch(getAllBlogs({ query: input, limit: 100 }));
  }, [input]);

  if (
    loadingAuthorsState === "pending" ||
    loadingAuthorsState === "idle" ||
    loadingProfileState === "pending" ||
    loadingProfileState === "idle" ||
    loadingAllBlogsState === "pending" ||
    loadingAllBlogsState === "idle"
  ) {
    return (
      <main className='view-author-section'>
        <div className='view-author-content'>
          <Loading type={"loading profile-page"} size={35} />
        </div>
      </main>
    );
  }

  return (
    <main className='profile-section'>
      <div className='profile-page-content'>
        <ProfileDetails type='Profile' />
        <ProfileHub type='Profile' />
      </div>
    </main>
  );
};

export default Profile;
