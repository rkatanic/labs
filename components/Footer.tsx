import DateTime from "./DateTime";
import { IoIosContrast } from "react-icons/io";

const Footer = () => {
  return (
    <div className="text-sm font-light uppercase flex gap-4 items-baseline justify-between w-full">
      <div className="tracking-widest text-gray-200">
        <DateTime />
      </div>
      <div className="flex gap-4 tracking-widest text-gray-200">
        <button className="border-2 rounded-full w-8 h-8 flex items-center justify-center">
          <IoIosContrast size="1rem" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
