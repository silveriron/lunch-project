import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-2 h-10 w-32 rounded bg-primary font-bold text-white active:bg-primary_100"
    >
      {children}
    </button>
  );
};

export default Button;
