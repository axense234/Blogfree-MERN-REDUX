import React, { useState, useRef, useEffect } from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MenuNav from "../Navbar/MenuNav";
import SearchBarMobile from "../Navbar/SearchBarMobile/SearchBarMobile";

const SharedLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);
  const menuNavRef = useRef(null);
  const menuButtonRef = useRef(null);
  const sbmRef = useRef(null);
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
    if (showSearchBarMobile) {
      sbmRef.current.style.display = "flex";
      timeout = setTimeout(() => {
        sbmRef.current.style.height = "100vh";
      });
      console.log("hello mna");
    } else {
      sbmRef.current.style.height = "1px";
      timeout = setTimeout(() => {
        sbmRef.current.style.display = "none";
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [showMenu, showSearchBarMobile]);

  // Close Menu once client resizes window
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1150 && showMenu) {
        setShowMenu(false);
      }
      if (window.innerWidth >= 1150 && showSearchBarMobile) {
        setShowSearchBarMobile(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [showMenu, showSearchBarMobile]);

  return (
    <>
      <Navbar
        setShowMenu={setShowMenu}
        setShowSbm={setShowSearchBarMobile}
        showMenu={showMenu}
        menuButtonRef={menuButtonRef}
      />
      <SearchBarMobile setShow={setShowSearchBarMobile} sbmRef={sbmRef} />
      <MenuNav menuRef={menuNavRef} setShowMenu={setShowMenu} />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default SharedLayout;
