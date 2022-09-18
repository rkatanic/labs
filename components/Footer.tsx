import DateTime from "./DateTime";

const Footer = () => {
  return (
    <div className="h-16 border-t-2 border-gray-900 max-w-5xl m-auto mt-16 px-16 flex gap-4 items-center justify-between relative before:absolute before:w-[2px] before:h-3 before:bg-gray-700 before:left-0 before:-top-[7px] after:right-0 after:-top-[7px] after:absolute after:w-[2px] after:h-3 after:bg-gray-700">
      <DateTime />
      <div className="flex gap-4">
        <span>.gh</span>
        <span>.ln</span>
      </div>
    </div>
  );
};

export default Footer;
