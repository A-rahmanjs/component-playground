import React from "react";

function Greeting({ name = "Stranger" }) {
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  console.log(formattedName);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Greetings, <span className="text-blue-600">{formattedName}</span>!
        </h1>
      </div>
    </div>
  );
}

export default Greeting;
