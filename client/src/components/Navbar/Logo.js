import React from "react";
// CSS
import "../../styles/Navbar/Logo.css";
// React Router
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className='logo-container' to='/'>
      <img
        src='https://res.cloudinary.com/birthdayreminder/image/upload/v1663917048/Blogfree/Logo_ph5clb.png'
        alt='Logo'
        className='logo-img'
        width='55px'
        height='55px'
      />
      <p>Blogfree</p>
    </Link>
  );
};

export default Logo;
