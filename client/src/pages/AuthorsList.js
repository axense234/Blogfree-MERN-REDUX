import React, { useEffect } from "react";
// Components
import AuthorsListItems from "../components/AuthorsList/AuthorsListItems";
// CSS
import "../styles/AuthorsList/AuthorsList.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  getAllAuthorsStatusSelector,
} from "../redux/slices/authorsSlice";
import Loading from "../components/Others/Loading";

const AuthorsList = () => {
  const dispatch = useDispatch();
  const loadingAuthorsState = useSelector(getAllAuthorsStatusSelector);
  useEffect(() => {
    dispatch(getAllAuthors({ query: "", limit: 100 }));
  }, []);
  return (
    <main className='authors-list-section'>
      <div className='authors-list-content'>
        <h1>Authors List</h1>
        {loadingAuthorsState !== "succeded" ? (
          <Loading type={"loading profile-page"} size={35} />
        ) : (
          <AuthorsListItems />
        )}
      </div>
    </main>
  );
};

export default AuthorsList;
