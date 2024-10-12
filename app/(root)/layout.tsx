import Header from "@/components/header/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      {/* FOOTER */}
    </>
  );
};

export default Layout;
