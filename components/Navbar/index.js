import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="w-full pt-10">
      <div className="hidden lg:flex bg-black w-3/5 py-3 px-16 text-[19px] text-[#9F9F9F]  justify-between rounded-r-[30px] gap-4 flex-wrap">
        <NavLinks />
      </div>
      {/* Mobile Navigation */}
      <div className=" lg:hidden  bg-black w-20 flex justify-end pr-3 py-1 rounded-r-2xl">
        <MenuIcon
          onClick={() => setMobileNav(!mobileNav)}
          className=" text-white/80 cursor-pointer h-10 w-10 "
        />
      </div>
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
    </div>
  );
};

export default Navbar;
