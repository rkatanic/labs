import Link from "next/link";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="m-auto w-full max-w-2xl flex items-center justify-between py-10 font-medium">
      <div className="dark:text-gray-200 text-gray-900 ">rkatanic</div>
      <div className="flex gap-4">
        <Link href="/">
          <span
            className={`cursor-pointer dark:hover:text-gray-200 ${
              router.asPath === "/"
                ? "dark:text-gray-200 text-gray-900"
                : "dark:text-gray-400 text-gray-300"
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/labs">
          <span
            className={`cursor-pointer dark:hover:text-gray-200 hover:text-gray-900 ${
              router.asPath === "/labs"
                ? "dark:text-gray-200 text-gray-900"
                : "dark:text-gray-400 text-gray-300"
            }`}
          >
            Labs
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`cursor-pointer dark:hover:text-gray-200 hover:text-gray-900 ${
              router.asPath === "/contact"
                ? "dark:text-gray-200 text-gray-900"
                : "dark:text-gray-400 text-gray-300"
            }`}
          >
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
