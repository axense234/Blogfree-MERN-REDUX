import React from "react";
// React Router
import { Link } from "react-router-dom";
// Components
import Mountains from "../components/404/Mountains";
import Sun from "../components/404/Sun";
// CSS
import "../styles/404/404.css";

const NotFound = () => {
  return (
    <main className='not-found-page-container'>
      <Sun />
      <div className='not-found-page-content'>
        <h1>
          404 <span>(not found)</span>
        </h1>
        <div className='not-found-page-buttons'>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
          <Link to='/authors/authors-list'>Authors</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/aboutus'>About Us</Link>
        </div>
      </div>
      <Mountains />
    </main>
  );
};

export default NotFound;
