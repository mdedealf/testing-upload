"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const Menus = ["Home", "Profile", "Customer"];
  const pathname = usePathname();

  return (
    <nav className="w-full bg-blue-300 h-[80px] flex items-center justify-start gap-4 px-10">
      {Menus.map((menu, idx) => {
        const isActive =
          (menu === "Home" && pathname === "/") ||
          pathname === `/${menu.toLowerCase()}`;

        return (
          <Link
            href={`${menu.toLowerCase() === "home" ? "/" : menu.toLowerCase()}`}
            key={idx}
          >
            <span
              className={`text-black ${
                isActive ? "font-extrabold" : "font-normal"
              }`}
            >
              {menu}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
