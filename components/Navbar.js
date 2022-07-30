import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="w-full pt-10">
      <div className="bg-black w-3/5 py-3 px-16 text-xl text-[#9F9F9F] flex justify-between rounded-r-[30px]">
        <Link href="/">
          <a className={currentRoute === "/" ? "link-active" : ""}>Start</a>
        </Link>
        <Link href="/specification">
          <a className={currentRoute === "/specification" ? "link-active" : ""}>
            Specification
          </a>
        </Link>
        <Link href="/autonomy">
          <a className={currentRoute === "/autonomy" ? "link-active" : ""}>
            Program Autonomy
          </a>
        </Link>
        <Link href="/simulation">
          <a className={currentRoute === "/simulation" ? "link-active" : ""}>
            Realtime Simulation
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
