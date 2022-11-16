import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const Header = (): JSX.Element => {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(() => {
      try {
        const theme = localStorage.getItem("theme");
        return theme || "dark";
      } catch (err) {}

      return "dark";
    });
  }, []);

  const hanleThemeToggle = () => {
    setTheme((prevState) => {
      const theme = prevState === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return theme;
    });
  };

  return (
    <div className="m-auto w-full max-w-2xl flex items-center justify-between py-10 font-medium">
      <div className="dark:text-gray-200 text-gray-900 ">rkatanic</div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4">
          <Link href="/">
            <span
              className={`cursor-pointer dark:hover:text-gray-200 ${
                router.asPath === "/"
                  ? "dark:text-gray-200 text-gray-900"
                  : "dark:text-gray-400 text-gray-300"
              }`}
            >
              about
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
              labs
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
              contact
            </span>
          </Link>
        </div>
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  );
};

export default Header;
