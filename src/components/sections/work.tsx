"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function Work() {
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
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/work/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface cursor-pointer"
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                  <div className={`absolute inset-0 bg-linear-to-br ${p.gradient}`} />
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-ink">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-body">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-ink">{p.result}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}