import { useState, useEffect, EffectCallback } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect((): ReturnType<EffectCallback> => {
    setIsDarkMode(localStorage.getItem("isDarkMode") == "false" ? false : true);
  }, []);

  const hanleThemeToggle = (): void => {
    setIsDarkMode((prevState: boolean): boolean => {
      const isDarkModeActive = !prevState;
      localStorage.setItem("isDarkMode", isDarkModeActive.toString());

      if (isDarkModeActive) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return isDarkModeActive;
    });
  };

  return (
    <label
      htmlFor="theme-switch"
      className="border w-9 h-9 flex items-center justify-center rounded-full dark:border-gray-700 cursor-pointer group dark:hover:bg-white hover:bg-black shadow-sm"
    >
      <input
        id="theme-switch"
        className="sr-only"
        type="checkbox"
        checked={isDarkMode}
        onChange={hanleThemeToggle}
      />
      {isDarkMode ? (
        <FiSun
          className="stroke-gray-400 dark:stroke-gray-200 dark:group-hover:stroke-black group-hover:stroke-white"
          size="1rem"
        />
      ) : (
        <FiMoon
          className="stroke-gray-400 dark:stroke-gray-200 dark:group-hover:stroke-black group-hover:stroke-white"
          size="1rem"
        />
      )}
    </label>
  );
};
export default ThemeSwitch;
