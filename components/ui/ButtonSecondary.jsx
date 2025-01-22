const ButtonSecondary = ({ children, onClick, extraClasses }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 text-white bg-gray-700 font-semibold rounded-lg shadow-md hover:bg-green-600 transition ${extraClasses}`}
      >
        {children}
      </button>
    );
  };
  
  export default ButtonSecondary;
  