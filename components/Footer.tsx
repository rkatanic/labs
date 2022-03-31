import "../styles/Header.module.scss";

const Footer = (): JSX.Element => {
  return (
    <header className="footer">
      <div className="footer-links">
        <a className="footer-link" href="">
          GitHub
        </a>
        <a className="footer-link" href="">
          LinkedIn
        </a>
      </div>
      <span>© 2022 Radivoje Katanic</span>
    </header>
  );
};

export default Footer;
