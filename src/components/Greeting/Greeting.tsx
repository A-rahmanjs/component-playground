import React from "react";

function Greeting({ name = "Stranger" }) {
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div className="flex items-center justify-center mb-10 w-full py-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl rounded-3xl p-8 text-center w-full max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-blue-400/20">
        <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-md">
          Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 animate-pulse">{formattedName}</span>!
        </h1>
        <p className="text-blue-100 text-lg mt-2 font-light">Welcome to my component playground</p>
      </div>
    </div>
  );
}

export default React.memo(Greeting);
