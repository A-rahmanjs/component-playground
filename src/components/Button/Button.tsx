// Button.tsx
import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, onClick, title = "", ...delegated }: ButtonProps) {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium"
      onClick={onClick}
      title={title}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
