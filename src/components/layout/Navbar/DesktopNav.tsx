"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { FaChevronDown } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex !== null ? navigation[activeIndex] : null;

  return (
    <nav
      className="relative hidden items-center gap-10 lg:flex"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {navigation.map((item, index) => (
        <div
          key={item.title}
          className="group relative"
          onMouseEnter={() => setActiveIndex(index)}
        >
          <Link
            href={item.href}
            className={`relative flex items-center gap-2 py-8 text-[15px] font-medium transition
              ${
                pathname === item.href
                  ? "text-body"
                  : "text-muted-ink hover:text-body"
              }`}
          >
            {item.title}

            {item.megaMenu && (
              <FaChevronDown
                size={11}
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            )}

            <span
              className={`absolute bottom-6 left-0 h-0.5 bg-node transition-all duration-300
              ${
                pathname === item.href
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </div>
      ))}

      {/* Mega menu positioned relative to the whole header container,
          not to the individual trigger link */}
      <AnimatePresence>
        {activeItem?.megaMenu && (
          <div className="absolute left-1/2 top-full z-50 w-212.5 max-w-[90vw] -translate-x-1/2">
            <div className="pt-6">
              <MegaMenu items={activeItem.megaMenu} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}