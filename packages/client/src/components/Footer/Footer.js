// CSS
import "../../styles/Footer/Footer.css";
// Components
import Logo from "../Navbar/Logo";
import FooterLinks from "./FooterLinks";
import FooterSm from "./FooterSm";
import Mountains from "../Mountains";

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
