import React from "react";
// Navbar Links
import { NavbarLinks } from "../../data";
// CSS
import "../../styles/Navbar/NavLinks.css";
// React Router
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const { pathname } = useLocation();
  const RenderedNavbarLinks = NavbarLinks.map((link) => {
    if (link.linkDest === pathname) {
      return null;
    }
    return (
      <Link to={link.linkDest} key={link.id}>
        {link.linkName}
      </Link>
    );
  });

  return <div className='navbar-links-container'>{RenderedNavbarLinks}</div>;
};

export default NavLinks;
