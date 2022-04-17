import Line from "./Line";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-content">
        <span>RK</span>
        <span>Labs</span>
      </div>
      <Line />
    </header>
  );
};

export default Header;
