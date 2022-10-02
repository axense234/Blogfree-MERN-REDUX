import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/Footer/FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className='footer-links'>
      <Link to='/aboutus'>About Us</Link>
      <Link to='/contactus'>Contact Us</Link>
    </div>
  );
};

export default FooterLinks;
