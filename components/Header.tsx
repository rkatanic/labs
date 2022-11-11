import Link from "next/link";
import { useRouter } from "next/router";
import { FiSun, FiSearch } from "react-icons/fi";
import { RiContrastFill } from "react-icons/ri";

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between max-w-min whitespace-nowrap p-2 px-6 m-auto border rounded-full border-zinc-700/50 bg-zinc-800/90 backdrop-blur shadow-lg shadow-black sticky top-8">
      <div className="flex gap-2 items-center border-r border-zinc-700 pr-5 mr-6">
        <FiSearch className="stroke-zinc-200" />
        {/* <div className="flex gap-1 px-1.5 items-center text-xs text-zinc-400 rounded-full border border-zinc-700/80">
          ctrl + /
        </div> */}
      </div>
      <div className="flex items-center gap-6">
        <Link href="/about">
          <span
            className={`cursor-pointer text-white relative ${
              router.asPath === "/about"
                ? "text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : ""
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/labs">
          <span
            className={`cursor-pointer text-white relative ${
              router.asPath === "/labs"
                ? "text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : ""
            }`}
          >
            Labs
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`cursor-pointer text-white relative ${
              router.asPath === "/contact"
                ? "text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : ""
            }`}
          >
            Contact
          </span>
        </Link>
        <div className="border-l border-zinc-700 pl-6">
          <RiContrastFill className="fill-zinc-200" size="1rem" />
        </div>
      </div>
    </div>
  );
};

export default Header;
