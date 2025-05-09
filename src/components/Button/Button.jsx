import React from "react";

function Button({ children, onClick, title }) {
  return (
    <button
      className="hover:bg-[#e8e8e8] active:bg-gray-500 px-2 border-1 p-2 border-cyan-600 border-solid rounded"
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}

export default Button;
