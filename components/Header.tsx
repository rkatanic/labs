const Header = (): JSX.Element => {
  return (
    <div className="h-16 border-b-2 border-gray-900 max-w-5xl px-16 m-auto mb-16 flex gap-4 items-center justify-between relative before:absolute before:w-[2px] before:h-3 before:bg-gray-700 before:left-0 before:-bottom-[6px] after:right-0 after:-bottom-[6px] after:absolute after:w-[2px] after:h-3 after:bg-gray-700">
      <div>radivoje.katanic</div>
      <div>
        <span className="text-gray-600 mr-1 font-medium">.</span>contact
        <span className="text-gray-600 mr-1 font-medium">()</span>
      </div>
    </div>
  );
};

export default Header;
