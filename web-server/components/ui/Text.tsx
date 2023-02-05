import React, { ReactNode } from "react";

const Text = ({ children }: { children: ReactNode }) => {
  return <p className="mx-auto mb-5 w-4/5 text-center">{children}</p>;
};

export default Text;
