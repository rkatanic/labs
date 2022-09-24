import DateTime from "./DateTime";
import { IoIosContrast } from "react-icons/io";

const Footer = () => {
  return (
    <div className="text-sm font-light uppercase flex gap-4 items-baseline justify-between w-full">
      <div className="tracking-widest text-gray-200">
        <DateTime />
      </div>
      <div className="flex gap-4 tracking-widest text-gray-200">
        <button>
          <IoIosContrast size="1.25rem" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
