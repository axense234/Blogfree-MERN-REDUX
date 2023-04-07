// Navbar Links
import { NavbarLinks } from "../../data";
// CSS
import "../../styles/Navbar/NavLinks.css";
// React Router
import { Link, useLocation } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getJWT,
  logoutProfile,
  updateOverlay,
} from "../../redux/slices/generalSlice";

const NavLinks = () => {
  const jwt = useSelector(getJWT);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const RenderedNavbarLinks = NavbarLinks.map((link) => {
    if (jwt && link.linkName === "Logout" && pathname !== "/login") {
      return (
        <Link
          to={pathname}
          key={link.id}
          onClick={() =>
            dispatch(
              updateOverlay({
                functionUsedOnConfirmation: logoutProfile(),
                msg: "Are you really sure you want to log out?",
                show: true,
              })
            )
          }
        >
          {link.linkName}
        </Link>
      );
    } else if (
      (jwt && link.linkName === "Login") ||
      link.linkDest === pathname
    ) {
      return null;
    } else if (link.linkName !== "Logout") {
      return (
        <Link to={link.linkDest} key={link.id}>
          {link.linkName}
        </Link>
      );
    } else {
      return null;
    }
  });

  return <div className='navbar-links-container'>{RenderedNavbarLinks}</div>;
};

export default NavLinks;
