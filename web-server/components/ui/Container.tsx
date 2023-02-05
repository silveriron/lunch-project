import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <main className="container mx-auto h-screen  pt-28">{children}</main>;
};

export default Container;
