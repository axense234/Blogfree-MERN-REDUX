import React from "react";
// Components
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";

// CSS
import "../../styles/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Logo />
      <Searchbar />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
