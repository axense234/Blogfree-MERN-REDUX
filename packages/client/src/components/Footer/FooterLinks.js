// React Router
import { Link } from "react-router-dom";
// CSS
import "../../styles/Footer/FooterLinks.css";
// Data
import { FooterLinksData } from "../../data";

const FooterLinks = () => {
  return (
    <div className='footer-links'>
      {FooterLinksData.map((link) => {
        return (
          <Link to={link.linkDest} key={link.id}>
            {link.linkName}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
