import React from "react";
// React Icons
import { AiOutlineMenu } from "react-icons/ai";

const MenuButton = ({ setShowMenu, showMenu, menuButtonRef }) => {
  return (
    <i ref={menuButtonRef}>
      <AiOutlineMenu
        id='menu-nav-button'
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </i>
  );
};

export default MenuButton;
