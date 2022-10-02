import React from "react";
// Components
import AboutUsContent from "../components/AboutUs/AboutUs";
// CSS
import "../styles/AboutUs/AboutUs.css";

const AboutUs = () => {
  return (
    <main className='aboutus-section'>
      <div className='aboutus-page-content'>
        <AboutUsContent />
      </div>
    </main>
  );
};

export default AboutUs;
