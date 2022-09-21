const Header = (): JSX.Element => {
  return (
    <div className="h-24 border-b-2 border-gray-800 max-w-5xl m-auto relative before:absolute before:w-[2px] before:h-3 before:bg-gray-700 before:left-0 before:-bottom-[6px] after:right-0 after:-bottom-[6px] after:absolute after:w-[2px] after:h-3 after:bg-gray-700">
      <div className="px-16 text-sm font-light top-[5.5rem] uppercase z-10 left-0 absolute flex gap-4 justify-between w-full">
        <div className="px-4 bg-black tracking-widest text-gray-200">
          rkatanic
        </div>
        <div className="px-4 bg-black tracking-widest text-gray-200">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
