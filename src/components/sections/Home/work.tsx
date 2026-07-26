"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/sections/Home/Projectcard";

const FEATURED_COUNT = 3;

export default function Work() {
  const featuredProjects = PROJECTS.slice(0, FEATURED_COUNT);

  return (
    <section id="work" className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
              Selected Work
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
              Results we can point to, not just deliverables.
            </h2>
          </div>

          <Link
            href="/work"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-body transition-all duration-300 hover:border-node hover:text-node sm:flex"
          >
            View All Work
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/work"
            className="group flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-body transition-all duration-300 hover:border-node hover:text-node"
          >
            View All Work
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}