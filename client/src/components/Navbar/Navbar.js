import React from "react";
// Components
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";

// CSS
import "../../styles/Navbar/Navbar.css";
import SearchBarMobileBtn from "./SearchBarMobile/SearchBarMobileBtn";

const Navbar = ({ setShowMenu, setShowSbm, showMenu, menuButtonRef }) => {
  return (
    <nav className='navbar-container'>
      <Logo />
      <Searchbar />
      <NavLinks />
      <SearchBarMobileBtn setShow={setShowSbm} />
      <MenuButton
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        menuButtonRef={menuButtonRef}
      />
    </nav>
  );
};

export default Navbar;
