import DateTime from "./DateTime";

const Footer = () => {
  return (
    <div className="mt-[3px] h-24 border-t-2  border-gray-800 max-w-5xl m-auto relative before:absolute before:w-[2px] before:h-3 before:bg-gray-700 before:left-0 before:-top-[7px] after:right-0 after:-top-[7px] after:absolute after:w-[2px] after:h-3 after:bg-gray-700">
      <div className="px-16 text-sm font-light bottom-[5.125rem] uppercase z-10 left-0 absolute flex gap-4 justify-between w-full">
        <div className="px-4 bg-black tracking-widest text-gray-200">
          <DateTime />
        </div>
        <div className="flex gap-4 px-4 bg-black tracking-widest text-gray-200">
          <span>GH</span>
          <span>LN</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
