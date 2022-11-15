import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiSun, FiMoon, FiSearch } from "react-icons/fi";
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
    <div className="z-10 flex items-baseline justify-between max-w-min whitespace-nowrap p-2 px-6 m-auto border rounded-full border-zinc-200 dark:border-zinc-700/50 bg-white/90 dark:bg-zinc-800/90 backdrop-blur shadow-lg shadow-zinc-200/50 dark:shadow-md dark:shadow-black sticky top-8">
      <div className="text-sm tracking-wide dark:text-zinc-200 border-r border-zinc-200 dark:border-zinc-700 pr-5 mr-6">
        RK
      </div>
      <div className="flex items-center gap-6">
        <Link href="/">
          <span
            className={`cursor-pointer relative hover:text-teal-500 dark:hover:text-teal-400 ${
              router.asPath === "/"
                ? "text-teal-500 dark:text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : "text-zinc-900 dark:text-white"
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/labs">
          <span
            className={`cursor-pointer relative hover:text-teal-500 dark:hover:text-teal-400 ${
              router.asPath === "/labs"
                ? "text-teal-500 dark:text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : "text-zinc-900 dark:text-white"
            }`}
          >
            Labs
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`cursor-pointer relative hover:text-teal-500 dark:hover:text-teal-400 ${
              router.asPath === "/contact"
                ? "text-teal-500 dark:text-teal-400 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-teal-400/0 before:via-teal-400/40 before:to-teal-400/0 before:top-8"
                : "text-zinc-900 dark:text-white"
            }`}
          >
            Contact
          </span>
        </Link>
        <div className="border-l border-zinc-200 dark:border-zinc-700 pl-6">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
