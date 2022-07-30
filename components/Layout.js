import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute w-full z-10">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
