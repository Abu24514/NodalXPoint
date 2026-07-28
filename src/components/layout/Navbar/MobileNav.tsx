"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: Props) {
  const pathname = usePathname();

  // top-level item expanded (About / Services / Technology / Industries)
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  // nested child expanded (e.g. QA Testing, Software Development)
  const [expandedChild, setExpandedChild] = useState<string | null>(null);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset accordion state whenever the drawer closes
  useEffect(() => {
    if (!open) {
      setExpandedItem(null);
      setExpandedChild(null);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-body/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-sm flex-col bg-surface shadow-[0_24px_70px_-20px_rgba(20,23,31,0.25)] lg:hidden"
          >
            {/* Header row inside drawer */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-6">
              <span className="font-display text-xl font-semibold tracking-tight text-body">
                Menu
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-body transition-colors duration-300 border border-white hover:border-node  cursor-pointer"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Scrollable nav list */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {navigation.map((item) => {
                const isItemActive = pathname === item.href;
                const isExpanded = expandedItem === item.title;

                return (
                  <div
                    key={item.title}
                    className="border-b border-line last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex-1 py-4 text-[15px] font-medium transition-colors duration-300 ${
                          isItemActive
                            ? "text-node"
                            : "text-body hover:text-node"
                        }`}
                      >
                        {item.title}
                      </Link>

                      {item.megaMenu && (
                        <button
                          onClick={() =>
                            setExpandedItem(isExpanded ? null : item.title)
                          }
                          aria-label={`Toggle ${item.title} submenu`}
                          className="flex h-10 w-10 items-center justify-center text-muted-ink"
                        >
                          <FaChevronDown
                            size={12}
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-node" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Level 1 mega menu items */}
                    {item.megaMenu && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden pb-3 pl-3"
                          >
                            {item.megaMenu.map((sub) => {
                              const hasChildren = !!sub.children?.length;
                              const isChildExpanded =
                                expandedChild === sub.title;

                              return (
                                <div key={sub.title} className="mb-1">
                                  <div className="flex items-center justify-between rounded-lg pr-1 transition-colors duration-200 hover:bg-node/5">
                                    <Link
                                      href={sub.href}
                                      onClick={onClose}
                                      className="flex-1 py-2.5 pl-3 text-sm text-muted-ink transition-colors duration-200 hover:text-node"
                                    >
                                      {sub.title}
                                    </Link>

                                    {hasChildren && (
                                      <button
                                        onClick={() =>
                                          setExpandedChild(
                                            isChildExpanded ? null : sub.title
                                          )
                                        }
                                        aria-label={`Toggle ${sub.title} submenu`}
                                        className="flex h-8 w-8 items-center justify-center text-muted-ink"
                                      >
                                        <FaChevronDown
                                          size={10}
                                          className={`transition-transform duration-300 ${
                                            isChildExpanded
                                              ? "rotate-180 text-node"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>

                                  {/* Level 2 (children) e.g. QA Testing -> Manual/Automation/API */}
                                  {hasChildren && (
                                    <AnimatePresence>
                                      {isChildExpanded && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{
                                            opacity: 1,
                                            height: "auto",
                                          }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                          }}
                                          className="ml-4 overflow-hidden border-l border-line pl-4"
                                        >
                                          {sub.children!.map((child) => (
                                            <Link
                                              key={child.title}
                                              href={child.href}
                                              onClick={onClose}
                                              className="block rounded-lg px-3 py-2 text-sm text-muted-ink transition-colors duration-200 hover:bg-canvas hover:text-node"
                                            >
                                              {child.title}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  )}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA pinned at bottom */}
            <div className="shrink-0 border-t border-line p-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-node bg-node px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node"
              >
                Contact Us
                <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}