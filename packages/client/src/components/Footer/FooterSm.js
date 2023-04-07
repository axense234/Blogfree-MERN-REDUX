// CSS
import "../../styles/Footer/FooterSm.css";
// React Router
import { Link } from "react-router-dom";
// Data
import { FooterSMLinksData } from "../../data";

const FooterSm = () => {
  return (
    <div className='footer-sm'>
      {FooterSMLinksData.map((smLink) => {
        return (
          <Link to={smLink.linkDest} key={smLink.id}>
            {smLink.icon}
            <p>{smLink.linkName}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSm;
