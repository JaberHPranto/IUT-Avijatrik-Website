import React from "react";
import { XIcon } from "@heroicons/react/outline";
import NavLinks from "/components/Navbar/NavLinks";

const MobileNav = ({ mobileNav, setMobileNav }) => {
  return (
    <div
      className={`${
        mobileNav ? "left-0" : "-left-full"
      }  fixed top-0 bottom-0 w-48 transition-all delay-300`}
    >
      <nav className="lg:hidden bg-[#06BE99] w-full h-full">
        <XIcon
          className="w-10 h-10 absolute left-4 top-6 cursor-pointer"
          onClick={() => setMobileNav(false)}
        />
        <div className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
          <NavLinks />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
