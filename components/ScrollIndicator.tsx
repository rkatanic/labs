import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ScrollIndicator = (): JSX.Element => (
  <div className="absolute top-0 -left-16 h-full flex flex-col justify-between font-medium dark:font-normal">
    <a
      id="top"
      href="#bottom"
      className="group flex items-end gap-2 w-0 h-0 mt-10 -rotate-90 dark:text-gray-600 text-sm text-gray-200 dark:hover:text-gray-200 hover:text-gray-900"
    >
      <div className="group-hover:bg-gray-900 dark:group-hover:bg-gray-200 bg-gray-200 dark:bg-gray-600 w-6 h-px absolute -top-[0.55rem] -left-8"></div>
      <div>scroll</div>
    </a>
    <a
      id="bottom"
      href="#"
      className="group flex items-end gap-2 h-0 w-0 whitespace-nowrap -rotate-90 dark:text-gray-600 text-sm text-gray-200 dark:hover:text-gray-200 hover:text-gray-900"
    >
      <div className="group-hover:bg-gray-900 dark:group-hover:bg-gray-200 bg-gray-200 dark:bg-gray-600 w-6 h-px absolute -top-[0.55rem] left-12"></div>
      <div>to top</div>
    </a>
  </div>
);

export default ScrollIndicator;
