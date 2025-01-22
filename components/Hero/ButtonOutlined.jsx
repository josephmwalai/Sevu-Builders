const ButtonOutlined = ({ children, onClick, extraClasses }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 text-blue-600 border border-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition ${extraClasses}`}
      >
        {children}
      </button>
    );
  };
  
  export default ButtonOutlined;
  