import React from "react";
// Data
import { NavbarLinks } from "../../data";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/Navbar/MenuNav.css";

const MenuNav = ({ menuRef, setShowMenu }) => {
  return (
    <section className='menu-nav-container' ref={menuRef}>
      {NavbarLinks.map(({ linkName, linkDest, id }) => {
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
