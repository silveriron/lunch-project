import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto flex h-screen flex-col items-center pt-28">
      {children}
    </main>
  );
};

export default Container;
