import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className="border-black dark:border-white h-[35px] w-[75px] border-2 rounded-2xl p-2 flex items-center relative cursor-pointer"
      onClick={toggleTheme}
    >
      <FaMoon className="h-5 w-5 text-black dark:text-white" />
      <FaSun className="h-5 w-5 ml-auto text-black dark:text-white" />

      <span
        className={`absolute h-7 w-7 bg-black dark:bg-white rounded-full transition-transform duration-300 ${
          isDarkMode ? "translate-x-[30px]" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}

export default ThemeSwitcher;
