import React from "react";
// Components
import AuthorsListItems from "../components/AuthorsList/AuthorsListItems";
// CSS
import "../styles/AuthorsList/AuthorsList.css";

const AuthorsList = () => {
  return (
    <main className='authors-list-section'>
      <div className='authors-list-content'>
        <h1>Authors List</h1>
        <AuthorsListItems />
      </div>
    </main>
  );
};

export default AuthorsList;
