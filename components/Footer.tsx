import "../styles/Header.module.scss";

const Footer = (): JSX.Element => {
  return (
    <header className="footer">
      <div className="cross cross-left"></div>
      <div className="cross cross-right"></div>
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
