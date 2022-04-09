import "../styles/Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="cross cross-left"></div>
      <div className="cross cross-right"></div>
      <span>RK</span>
      <span>Labs</span>
    </header>
  );
};

export default Header;
