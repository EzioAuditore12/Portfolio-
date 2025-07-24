import React from "react";
import { useNavigate } from "react-router-dom";

function ContactMeBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button
      onClick={handleClick}
      className="ml-auto w-[110px] bg-red-400 rounded-[33px] text-white hover:bg-red-500 transform hover:scale-105 transition-all duration-300"
    >
      Contact Me
    </button>
  );
}

export default ContactMeBtn;
