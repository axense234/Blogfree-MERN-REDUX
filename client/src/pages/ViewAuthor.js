import React, { useEffect } from "react";
// Components
import ProfileHub from "../components/Others/ProfileHub";
import ProfileDetails from "../components/Profile/ProfileDetails";
import Loading from "../components/Others/Loading";
// CSS
import "../styles/ViewAuthor/ViewAuthor.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  getAllAuthorsStatusSelector,
} from "../redux/slices/authorsSlice";
import { clearBlogs, getAllBlogs } from "../redux/slices/blogsSlice";
import {
  getJWT,
  getProfile,
  getProfileStatus,
} from "../redux/slices/generalSlice";

const ViewAuthor = () => {
  const jwt = useSelector(getJWT);

  const dispatch = useDispatch();
  const loadingAuthorsState = useSelector(getAllAuthorsStatusSelector);
  const loadingProfileState = useSelector(getProfileStatus);

  useEffect(() => {
    dispatch(clearBlogs());
    dispatch(getProfile(jwt));
    dispatch(getAllAuthors({ query: "", limit: 100 }));
    dispatch(getAllBlogs({ query: "", limit: 100 }));
  }, []);

  if (
    loadingAuthorsState === "pending" ||
    loadingAuthorsState === "idle" ||
    loadingProfileState === "pending" ||
    loadingProfileState === "idle"
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
    <main className='view-author-section'>
      <div className='view-author-content'>
        <ProfileDetails type={"Author"} />
        <ProfileHub type={"Author"} />
      </div>
    </main>
  );
};

export default ViewAuthor;
