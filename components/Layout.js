import React from "react";
import Navbar from "/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Logo */}
      <div className="absolute h-28 w-28 top-2 left-[50%] translate-x-[-50%] lg:hidden">
        <img src="/images/avijatrik_logo.png" alt="logo" />
      </div>
      <div className="hidden lg:inline-block absolute h-32 w-32 top-1 right-16">
        <img src="/images/avijatrik_logo.png" alt="logo" />
      </div>
      <div className="absolute w-full z-10">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
