import MonIcon from "../assets/icons/mon.svg";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-mon-left">
        <MonIcon />
      </div>
      <div className="header-mon-right">
        <MonIcon />
      </div>
      <span>RK</span>
      <span>Labs</span>
    </header>
  );
};

export default Header;
