import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <Link href="/">
        <a
          className={
            currentRoute === "/" ? "link-active" : "hover:text-white/80"
          }
        >
          Start
        </a>
      </Link>
      <Link href="/specification">
        <a
          className={
            currentRoute === "/specification"
              ? "link-active"
              : "hover:text-white/80"
          }
        >
          Specification
        </a>
      </Link>
      <Link href="/autonomy">
        <a
          className={
            currentRoute === "/autonomy" ? "link-active" : "hover:text-white/80"
          }
        >
          Program Autonomy
        </a>
      </Link>
      <Link href="/simulation">
        <a
          className={
            currentRoute === "/simulation"
              ? "link-active"
              : "hover:text-white/80"
          }
        >
          Realtime Simulation
        </a>
      </Link>
    </>
  );
};

export default NavLinks;
