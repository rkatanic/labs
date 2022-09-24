const Header = (): JSX.Element => {
  return (
    <div className="text-sm font-light flex gap-4 justify-between w-full">
      <div className="tracking-widest text-gray-200 flex gap-2 items-center">
        <div className="h-6 w-6 border-[3px] rounded-full"></div>
        <div className="-mb-0.5 initials tracking-tighter font-medium">RK</div>
      </div>
      <div className="tracking-widest text-gray-200">Contact</div>
    </div>
  );
};

export default Header;
