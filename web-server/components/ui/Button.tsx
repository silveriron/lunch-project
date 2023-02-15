import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  style?: string;
}

const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-32 rounded bg-primary font-bold text-white active:bg-primary_100 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
