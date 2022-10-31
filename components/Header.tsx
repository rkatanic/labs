const Header = (): JSX.Element => (
  <div className="p-[8vh] z-20 fixed pointer-events-none flex items-start justify-between w-full">
    <div>RK</div>
    <div className="flex gap-16 -rotate-90 fixed top-1/2 -translate-y-1/2 -right-[4vh]">
      <div>Contact</div>
      <div>About</div>
      <div>Home</div>
    </div>
  </div>
);

export default Header;
