import React from "react";
import { XIcon } from "@heroicons/react/outline";
import NavLinks from "/components/Navbar/NavLinks";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ setMobileNav }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 192 }}
        exit={{ width: 0 }}
        className={`fixed top-0 bottom-0`}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
