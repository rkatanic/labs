import MonIcon from "../assets/icons/mon.svg";

const Footer = (): JSX.Element => {
  return (
    <header className="footer">
      <div className="footer-mon-left">
        <MonIcon />
      </div>
      <div className="footer-mon-right">
        <MonIcon />
      </div>
      <span>© 2022 Radivoje Katanic</span>
      <div className="footer-links">
        <a className="footer-link" href="">
          GitHub
        </a>
        <a className="footer-link" href="">
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Footer;
