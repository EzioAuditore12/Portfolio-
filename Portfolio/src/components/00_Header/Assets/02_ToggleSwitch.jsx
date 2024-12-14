import React, { useState } from "react";
import Sun from "./Svg/01_ToggleIcons/Sun.svg";
import Moon from "./Svg/01_ToggleIcons/Moon.svg";

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

    {/* Moon Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="30" fill="#FFC107" />
    <circle cx="60" cy="40" r="25" fill="white" />
  </svg>

    {/* Sun Icon */}
    <img src={Sun} className="h-5 w-5 ml-auto" alt="Sun" />

      {/* Round span */}
      <span
        className={`absolute h-7 w-7 bg-black dark:bg-white rounded-full transition-transform duration-300 ${
          isDarkMode ? "translate-x-[30px]" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}

export default ThemeSwitcher;
