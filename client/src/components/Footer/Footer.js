import React from "react";
// Components
import Logo from "../Navbar/Logo";
import FooterLinks from "./FooterLinks";
import FooterSm from "./FooterSm";
import Mountains from "../Mountains";
// CSS
import "../../styles/Footer/Footer.css";

const Footer = () => {
  return (
    <section className='footer-wrapper'>
      <Mountains />
      <footer className='footer-container'>
        <Logo />
        <FooterLinks />
        <FooterSm />
      </footer>
    </section>
  );
};

export default Footer;
