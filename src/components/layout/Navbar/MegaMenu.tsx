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
  FaChevronRight,
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  // agar kisi bhi item me children hain, list layout use karo (jaise reference image)
  const hasNestedItems = items.some((item) => item.children?.length);

  if (!hasNestedItems) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="
          w-full
          rounded-2xl
          border
          border-line
          bg-surface
          p-10
          shadow-[0_24px_70px_-20px_rgba(20,23,31,0.18)]
        "
      >
        <div className="grid grid-cols-2 gap-x-14 gap-y-9">
          {items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? FaGlobe;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-3"
              >
                <Icon
                  size={20}
                  className="mt-1 shrink-0 text-muted-ink transition-colors duration-300 group-hover:text-node"
                />

                <div>
                  <h3 className="relative inline-block text-[15px] font-semibold text-body">
                    {item.title}
                    <span
                      className="
                        absolute
                        -bottom-1.5
                        left-0
                        h-0.5
                        w-0
                        bg-node
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-ink">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      onMouseLeave={() => setActiveIndex(null)}
      className="flex items-start"
    >
      {/* primary column */}
      <div
        className="
          w-72
          rounded-2xl
          border
          border-line
          bg-surface
          p-4
          shadow-[0_24px_70px_-20px_rgba(20,23,31,0.18)]
        "
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const hasChildren = !!item.children?.length;

          const content = (
            <div
              className={`
                group flex items-center justify-between gap-3
                rounded-xl px-4 py-3
                transition-colors duration-200
                ${isActive ? "bg-canvas" : "hover:bg-canvas"}
              `}
            >
              <span
                className={`
                  text-[15px] font-semibold
                  transition-colors duration-200
                  ${isActive ? "text-node" : "text-body"}
                `}
              >
                {item.title}
              </span>

              {hasChildren && (
                <FaChevronRight
                  size={12}
                  className={`
                    shrink-0 transition-colors duration-200
                    ${isActive ? "text-node" : "text-muted-ink"}
                  `}
                />
              )}
            </div>
          );

          return (
            <div key={item.title} onMouseEnter={() => setActiveIndex(index)}>
              {hasChildren ? (
                content
              ) : (
                <Link href={item.href}>{content}</Link>
              )}
            </div>
          );
        })}
      </div>

      {/* nested flyout */}
      <AnimatePresence mode="wait">
        {activeItem?.children?.length ? (
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            className="
              ml-3
              w-80
              rounded-2xl
              border
              border-line
              bg-surface
              p-4
              shadow-[0_24px_70px_-20px_rgba(20,23,31,0.18)]
            "
          >
            {activeItem.children.map((child) => {
              const Icon = icons[child.icon as keyof typeof icons] ?? FaGlobe;

              return (
                <Link
                  key={child.title}
                  href={child.href}
                  className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-canvas"
                >
                  <Icon
                    size={18}
                    className="mt-1 shrink-0 text-muted-ink transition-colors duration-300 group-hover:text-node"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-body group-hover:text-node transition-colors duration-200">
                      {child.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-muted-ink">
                      {child.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}