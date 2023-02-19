import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  style?: string;
}

const Text = ({ children, style }: TextProps) => {
  return (
    <p className={`mx-auto mb-5 w-4/5 text-center ${style}`}>{children}</p>
  );
};

export default Text;
