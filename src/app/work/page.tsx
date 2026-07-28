"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProjectCard from "@/components/sections/Home/Projectcard";
import { PROJECTS } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-canvas text-body">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            Our Work
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-body sm:text-4xl md:text-5xl">
            Every project, every result.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-ink sm:text-lg">
            The complete list — {PROJECTS.length} projects and counting.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i % 3} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}