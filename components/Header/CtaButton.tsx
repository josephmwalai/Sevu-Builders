import React from "react";

const CTAButton = ({ text = "Get Started", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-600 text-white font-semibold py-4 px-6 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      {text}
    </button>
  );
};

export default CTAButton;
