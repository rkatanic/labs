import { FiMenu } from "react-icons/fi";
import DateTime from "./DateTime";

const Layout = (props: any): JSX.Element => (
  <div className="home h-screen overflow-hidden bg-black p-8">
    <div className="border-2 h-full border-gray-800 p-8 overflow-hidden">
      <div className="mb-4 flex gap-4 justify-between items-center">
        <span className="text-gray-200 font-medium text-2xl flex items-baseline m-0 p-0 gap-2">
          <div className="border-[3px] rounded-full border-white w-4 h-4"></div>
          Garden
        </span>
        <FiMenu size="1.25rem" className="stroke-gray-50" />
      </div>

      <div className="grid h-full">{props.children}</div>
    </div>

    <DateTime />
  </div>
);
export default Layout;
