"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center border-b border-line bg-canvas/85 backdrop-blur-lg">
      <div className="flex h-20 w-full max-w-6xl items-center justify-between px-6">

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-5">

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full border border-node bg-node px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node lg:flex cursor-pointer"
          >
            Contact Us
            <FiArrowUpRight />
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="text-3xl text-body transition-colors duration-300 hover:text-node lg:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>

      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}