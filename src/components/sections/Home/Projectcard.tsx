"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";

type Project = (typeof PROJECTS)[number];

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface cursor-pointer"
      >
        <div className="relative h-44 w-full shrink-0 overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-ink">
            {project.tag}
          </span>
          <h3 className="mt-2 font-display text-lg font-semibold text-body">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-ink">{project.result}</p>
        </div>
      </Link>
    </motion.div>
  );
}