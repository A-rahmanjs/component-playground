import React from "react";

function Greeting({ name = "Stranger" }) {
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div className="flex items-center justify-center mb-10 w-full">
      <div className="bg-[#f9f9f9] shadow-lg rounded-2xl p-8 text-center w-full">
        <h1 className="text-3xl font-bold text-gray-800">
          Hello, <span className="text-blue-600">{formattedName}</span>!
        </h1>
      </div>
    </div>
  );
}

export default React.memo(Greeting);
