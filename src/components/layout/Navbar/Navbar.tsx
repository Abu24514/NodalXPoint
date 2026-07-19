"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-center border-b border-line-ink bg-ink/90 backdrop-blur-lg">
      <div className="flex h-20 w-full max-w-6xl items-center justify-between px-6">

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-5">

          <button
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-brass
              bg-brass
              px-7
              py-3
              text-sm
              font-semibold
              text-ink
              transition
              duration-300
              hover:bg-transparent
              hover:text-brass-soft
              lg:flex
            "
          >
            Contact Us
            <FiArrowUpRight />
          </button>

          <button className="text-3xl text-body lg:hidden">
            <HiOutlineMenuAlt3 />
          </button>

        </div>

      </div>
    </header>
  );
}