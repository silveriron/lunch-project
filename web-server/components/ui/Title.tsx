import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="mb-14 text-center text-4xl font-bold">{children}</h1>;
};

export default Title;
