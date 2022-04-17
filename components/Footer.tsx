import Line from "./Line";

const Footer = (): JSX.Element => {
  return (
    <div className="footer" id="bottom">
      <Line />
      <div className="footer-content">
        <span>© 2022 Radivoje Katanic</span>
        <div className="footer-links">
          <a className="footer-link" href="">
            GitHub
          </a>
          <a className="footer-link" href="">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
