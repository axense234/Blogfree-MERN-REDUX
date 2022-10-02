import React from "react";
// CSS
import "../styles/Home/Home.css";
// Components
import HomePageInfo from "../components/Home/HomePageInfo";
import HomePageImg from "../components/Home/HomePageImg";

const Home = () => {
  return (
    <main className='home-container'>
      <div className='home-page-content'>
        <HomePageImg />
        <HomePageInfo />
      </div>
    </main>
  );
};

export default Home;
