import React, { useState } from "react";
import Sun from "./Svg/Sun.svg";
import Moon from "./Svg/Moon.svg";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="h-[35px] w-[75px] border-2 border-black rounded-2xl p-2 flex items-center relative cursor-pointer"
      onClick={toggleTheme}
    >
      {/* Sun Icon */}
      <img src={Sun} className="h-5 w-5" alt="Sun" />

      {/* Moon Icon */}
      <img src={Moon} className="h-5 w-5 ml-auto" alt="Moon" />

      {/* Round span */}
      <span
        className={`absolute h-7 w-7 bg-black rounded-full transition-transform duration-300 ${
          isDarkMode ? "translate-x-[30px]" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}

export default ThemeSwitcher;
