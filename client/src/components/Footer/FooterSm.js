import React from "react";
// React Icons
import { BsInstagram, BsGithub } from "react-icons/bs";
// CSS
import "../../styles/Footer/FooterSm.css";

const FooterSm = () => {
  return (
    <div className='footer-sm'>
      <a href='https://www.instagram.com' target='_blank'>
        <BsInstagram />
        <p>Instagram</p>
      </a>
      <a href='https://www.github.com' target='_blank'>
        <BsGithub />
        <p>Github</p>
      </a>
    </div>
  );
};

export default FooterSm;
