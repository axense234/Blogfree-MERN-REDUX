import React from "react";
// Components
import ProfileHub from "../components/Others/ProfileHub";
import ProfileDetails from "../components/Profile/ProfileDetails";
// CSS
import "../styles/ViewAuthor/ViewAuthor.css";

const ViewAuthor = () => {
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
