"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Item = {
  title: string;
  href: string;
};

type Props = {
  items: Item[];
};

export default function Dropdown({ items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-line bg-surface p-3 shadow-[0_24px_70px_-20px_rgba(20,23,31,0.2)]"
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 hover:bg-node/5"
        >
          <span className="text-sm text-muted-ink group-hover:text-body">
            {item.title}
          </span>

          <span className="translate-x-2 text-node opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            →
          </span>
        </Link>
      ))}
    </motion.div>
  );
}