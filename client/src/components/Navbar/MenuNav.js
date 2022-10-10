import React from "react";
// Data
import { NavbarLinks } from "../../data";
// React Router
import { Link, useLocation } from "react-router-dom";
// CSS
import "../../styles/Navbar/MenuNav.css";

const MenuNav = ({ menuRef, setShowMenu }) => {
  const { pathname } = useLocation();
  return (
    <section className='menu-nav-container' ref={menuRef}>
      {NavbarLinks.map(({ linkName, linkDest, id }) => {
        if (linkDest === pathname) {
          return null;
        }
        return (
          <Link to={linkDest} key={id} onClick={() => setShowMenu(false)}>
            {linkName}
          </Link>
        );
      })}
    </section>
  );
};

export default MenuNav;
