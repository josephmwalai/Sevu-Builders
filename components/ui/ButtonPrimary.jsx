import React from "react";

const ButtonPrimary = ({ children, onClick, extraClasses, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 flex items-center gap-2 text-white bg-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition ${extraClasses}`}
    >
      {Icon && <Icon className="text-white w-5 h-5" />}
      {children}
    </button>
  );
};

export default ButtonPrimary;
