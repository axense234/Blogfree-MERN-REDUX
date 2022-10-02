import React from "react";
// React Icons
import { BsInstagram, BsGithub } from "react-icons/bs";
// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/Footer/FooterSm.css";

const FooterSm = () => {
  return (
    <div className='footer-sm'>
      <Link>
        <BsInstagram />
        <p>Instagram</p>
      </Link>
      <Link>
        <BsGithub />
        <p>Github</p>
      </Link>
    </div>
  );
};

export default FooterSm;
