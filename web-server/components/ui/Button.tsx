import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: any;
  style?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, style, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 w-32 rounded bg-primary font-bold text-white active:bg-primary_100 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
