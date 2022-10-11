import React from "react";
// Components
import NoProfile from "../components/Profile/NoProfile";
import ProfileDetails from "../components/Profile/ProfileDetails";
import ProfileHub from "../components/Others/ProfileHub";
// CSS
import "../styles/Profile/Profile.css";

const Profile = () => {
  // condition based on jwttoken
  if (1 === 2) {
    return <NoProfile />;
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
