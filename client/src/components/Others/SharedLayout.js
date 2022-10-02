import React from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import Footer from "../Footer";
import Navbar from "../Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default SharedLayout;
