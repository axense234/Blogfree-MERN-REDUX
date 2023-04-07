// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/Profile/NoProfile.css";

const NoProfile = () => {
  return (
    <section className='no-profile-section'>
      <div className='no-profile-page-content'>
        <h1>Sign Up or Login to be able to have access to your profile!</h1>
        <div className='no-profile-section-links'>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </section>
  );
};

export default NoProfile;
