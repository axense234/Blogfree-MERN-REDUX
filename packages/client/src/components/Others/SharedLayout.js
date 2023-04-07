// React
import React, { useState, useRef, useEffect } from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MenuNav from "../Navbar/MenuNav";
import SearchBarMobile from "../Navbar/SearchBarMobile/SearchBarMobile";
import Overlay from "./Overlay";

const SharedLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);
  const menuNavRef = useRef(null);
  const menuButtonRef = useRef(null);
  const sbmRef = useRef(null);

  // Menu transition based on showMenu
  useShowComponentTransition(
    menuNavRef,
    menuButtonRef,
    sbmRef,
    showMenu,
    showSearchBarMobile
  );

  // Menus showing / closing
  useShowComponent(setShowMenu, showMenu);
  useShowComponent(setShowSearchBarMobile, showSearchBarMobile);

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
      <Overlay />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

const useShowComponent = (setter, showValue, preferedWindowWidth = 1150) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= preferedWindowWidth && showValue) {
        setter(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [setter, showValue, preferedWindowWidth]);
};

const useShowComponentTransition = (
  menuNavRef,
  menuButtonRef,
  sbmRef,
  showMenu,
  showSearchBarMobile
) => {
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
  }, [menuButtonRef, menuNavRef, sbmRef, showMenu, showSearchBarMobile]);
};

export default SharedLayout;
