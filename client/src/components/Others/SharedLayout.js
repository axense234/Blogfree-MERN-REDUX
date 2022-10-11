import React, { useState, useRef, useEffect } from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MenuNav from "../Navbar/MenuNav";

const SharedLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuNavRef = useRef(null);
  const menuButtonRef = useRef(null);
  // Menu transition based on showMenu
  useEffect(() => {
    let timeout;
    if (showMenu) {
      menuNavRef.current.style.display = "flex";
      menuButtonRef.current.style.color = "#07982f";
      timeout = setTimeout(() => {
        menuNavRef.current.style.height = "100%";
      });
    } else {
      menuNavRef.current.style.height = "1px";
      menuButtonRef.current.style.color = "#f7c40a";
      timeout = setTimeout(() => {
        menuNavRef.current.style.display = "none";
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [showMenu]);

  // Close Menu once client resizes window
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("did it");
      if (window.innerWidth >= 1150 && showMenu) {
        console.log("set it to false");
        setShowMenu(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [showMenu]);

  return (
    <>
      <Navbar
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        menuButtonRef={menuButtonRef}
      />
      <MenuNav menuRef={menuNavRef} setShowMenu={setShowMenu} />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default SharedLayout;
