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
    <label htmlFor="theme-switch">
      <input
        id="theme-switch"
        className="sr-only"
        type="checkbox"
        checked={isDarkMode}
        onChange={hanleThemeToggle}
      />
      {isDarkMode ? (
        <FiSun
          className="stroke-zinc-400 dark:stroke-zinc-200 cursor-pointer dark:hover:stroke-teal-400 transition-colors duration-200"
          size="1rem"
        />
      ) : (
        <FiMoon
          className="stroke-zinc-400 dark:stroke-zinc-200 cursor-pointer hover:stroke-teal-500 transition-colors duration-200"
          size="1rem"
        />
      )}
    </label>
  );
};
export default ThemeSwitch;
