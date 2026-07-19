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
      className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl"
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 hover:bg-cyan-500/10"
        >
          <span className="text-sm text-slate-300 group-hover:text-white">
            {item.title}
          </span>

          <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            →
          </span>
        </Link>
      ))}
    </motion.div>
  );
}