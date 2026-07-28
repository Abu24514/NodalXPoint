"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { fadeUp } from "@/lib/motion";
import { ServiceCardData } from "@/types/service";

export default function ServiceCard({ title, slug, badge, desc, icon: Icon, features }: ServiceCardData) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }}>
      <Link
        href={`/services/${slug}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all hover:border-node/40 hover:shadow-xl"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-node/10 text-node transition-all group-hover:scale-105 group-hover:bg-node group-hover:text-white">
              <Icon size={22} />
            </span>
            <span className="rounded-full bg-node/10 px-3 py-1 text-[11px] font-semibold text-node">
              {badge}
            </span>
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-body transition-colors group-hover:text-node">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-ink">{desc}</p>

          <ul className="mt-4 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-muted-ink">
                <FiCheck className="mt-0.5 shrink-0 text-node" size={14} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-node">
          <span>Learn More</span>
          <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}