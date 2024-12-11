import React, { useState } from "react";
import Sun from "./Svg/Sun.svg";
import Moon from "./Svg/Moon.svg";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <input
        className="hidden"
        type="checkbox"
        id="darkmode-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label
        className="p-1 flex gap-2 justify-center items-center w-[65px] h-[30px] cursor-pointer transition-all duration-300 bg-gray-200 rounded-full shadow-md relative"
        htmlFor="darkmode-toggle"
      >
        {/* Sun and Moon SVGs as images */}
        <img
          src={Sun}
          alt="Sun Icon"
          className={`w-5 h-5 absolute left-2 transition-all duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={Moon}
          alt="Moon Icon"
          className={`w-5 h-5 absolute left-2 transition-all duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Slider */}
        <div
          className={`absolute top-1 left-[3px] w-[25px] h-[25px] bg-yellow-400 rounded-full shadow-lg transition-all duration-300 ${
            darkMode ? "translate-x-[35px] bg-gray-700" : ""
          }`}
        />
      </label>
    </div>
  );
}

export default ThemeSwitcher;
