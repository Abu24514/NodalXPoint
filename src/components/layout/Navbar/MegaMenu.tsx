"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiSparkleLight } from "react-icons/pi";
import { SiPhp } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { AiOutlinePython } from "react-icons/ai";

const icons = {
  globe: FaGlobe,
  mobile: FaMobileAlt,
  sparkles: PiSparkleLight,
  shield: FaShieldAlt,
  cloud: FaCloud,
  chart: FaChartLine,
  users: FaUsers,
  company: FaBuilding,
  briefcase: FaBriefcase,
  mail: HiOutlineMail,
  php: SiPhp,
  java: LiaJava,
  python: AiOutlinePython,
};

type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  children?: MegaMenuItem[];
};

type Props = {
  items: MegaMenuItem[];
};

export default function MegaMenu({ items }: Props) {
  // Which item's children are currently expanded — one at a time
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full rounded-2xl border border-line bg-surface p-10 shadow-[0_24px_70px_-20px_rgba(20,23,31,0.18)]"
    >
      <div className="grid grid-cols-2 gap-x-14 gap-y-9">
        {items.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? FaGlobe;
          const hasChildren = !!item.children?.length;
          const isExpanded = expanded === item.title;

          return (
            <div
              key={item.title}
              className="group"
              onMouseEnter={() => hasChildren && setExpanded(item.title)}
              onMouseLeave={() => hasChildren && setExpanded(null)}
            >
              <Link href={item.href} className="flex items-start gap-3">
                <Icon
                  size={20}
                  className="mt-1 shrink-0 text-muted-ink transition-colors duration-300 group-hover:text-node"
                />

                <div className="flex-1">
                  <h3 className="relative inline-flex items-center gap-1.5 text-[15px] font-semibold text-body">
                    {item.title}

                    {hasChildren && (
                      <FaChevronDown
                        size={10}
                        className={`text-muted-ink transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-node" : ""
                        }`}
                      />
                    )}

                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-node transition-all duration-300 group-hover:w-full" />
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-ink">
                    {item.description}
                  </p>
                </div>
              </Link>

              {/* Sub-routes open INSIDE the same card, right below its description */}
              {hasChildren && (
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="ml-8 mt-3 space-y-0.5 overflow-hidden border-l border-line pl-4"
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="group/child flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-ink transition-colors duration-200 hover:bg-canvas hover:text-node"
                        >
                          {child.title}
                          <span className="translate-x-1 text-node opacity-0 transition-all duration-200 group-hover/child:translate-x-0 group-hover/child:opacity-100">
                            →
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}