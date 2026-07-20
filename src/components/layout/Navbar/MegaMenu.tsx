"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaUsers,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiSparkleLight } from "react-icons/pi";

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
};

type Props = {
  items: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
};

export default function MegaMenu({ items }: Props) {
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