import React from "react";
// React Icons
import { BsInstagram, BsGithub } from "react-icons/bs";
// CSS
import "../../styles/Footer/FooterSm.css";

const FooterSm = () => {
  return (
    <div className='footer-sm'>
      <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
        <BsInstagram aria-label='Instagram Icon' />
        <p>Instagram</p>
      </a>
      <a href='https://www.github.com' target='_blank' rel='noreferrer'>
        <BsGithub aria-label='Github Icon' />
        <p>Github</p>
      </a>
    </div>
  );
};

export default FooterSm;
