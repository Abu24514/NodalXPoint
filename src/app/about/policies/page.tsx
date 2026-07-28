"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaPrint } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { policies, EFFECTIVE_DATE, LAST_REVIEWED } from "@/data/policiesData";

export default function PoliciesPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(policies[0].id);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });
  
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const sections = policies
      .map((p) => document.getElementById(p.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-canvas min-h-screen">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8 mt-15">
        <nav className="flex items-center gap-2 text-xs text-muted-ink">
          <Link href="/" className="transition-colors hover:text-node">
            Home
          </Link>
          <span>/</span>
          <Link href="/about" className="transition-colors hover:text-node">
            About
          </Link>
          <span>/</span>
          <span className="text-body">Policies</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-8 md:pb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-node">
          Legal & Trust
        </span>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-body md:text-5xl">
          Policies
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-ink">
          These documents govern how NodalXpoint Technologies Pvt. Ltd.
          collects data, delivers projects, and works with clients. They
          apply alongside any signed project agreement, which takes
          precedence in the event of conflict.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-ink">
              Effective date
            </p>
            <p className="text-sm font-semibold text-body">
              {EFFECTIVE_DATE}
            </p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-ink">
              Last reviewed
            </p>
            <p className="text-sm font-semibold text-body">
              {LAST_REVIEWED}
            </p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-ink">
              Governing law
            </p>
            <p className="text-sm font-semibold text-body">
              India — Delhi jurisdiction
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="ml-auto flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-muted-ink transition-colors duration-200 hover:border-node hover:text-node print:hidden"
          >
            <FaPrint size={12} />
            Print / Save as PDF
          </button>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
          {/* Sticky nav with reading-progress rail */}
          <nav className="hidden lg:block print:hidden">
            <div className="sticky top-28 flex gap-4">
              <div className="relative w-px shrink-0 bg-line">
                <motion.div
                  style={{ scaleY: progress }}
                  className="absolute left-0 top-0 h-full w-px origin-top bg-node"
                />
              </div>

              <ul className="flex flex-col gap-5">
                {policies.map((p, i) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className={`flex items-baseline gap-2 text-sm transition-colors duration-200 ${
                        activeId === p.id
                          ? "font-semibold text-node"
                          : "text-muted-ink hover:text-body"
                      }`}
                    >
                      <span className="text-xs tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile jump menu */}
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:hidden print:hidden">
            {policies.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                  activeId === p.id
                    ? "border-node text-node"
                    : "border-line text-muted-ink"
                }`}
              >
                {p.label}
              </a>
            ))}
          </nav>

          {/* Policy sections */}
          <div ref={contentRef} className="flex flex-col gap-20">
            {policies.map((policy, i) => (
              <article key={policy.id} id={policy.id} className="scroll-mt-28">
                <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                  <h2 className="text-2xl font-bold text-body">
                    <span className="mr-2 text-node">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {policy.label}
                  </h2>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-muted-ink">
                  {policy.summary}
                </p>

                <ol className="mt-8 flex flex-col gap-6 border-l border-line pl-6">
                  {policy.clauses.map((clause) => (
                    <li key={clause.number}>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-sm font-semibold tabular-nums text-node">
                          {clause.number}
                        </span>
                        <h3 className="text-[15px] font-semibold text-body">
                          {clause.heading}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-muted-ink">
                        {clause.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}

            <div className="rounded-2xl border border-line bg-surface p-8 text-center print:hidden">
              <h3 className="text-lg font-semibold text-body">
                Questions about any of these policies?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-ink">
                Write to us at{" "}
                <a
                  href="mailto:lesani@nodalxpoint.com"
                  className="font-medium text-node"
                >
                  lesani@nodalxpoint.com
                </a>{" "}
                and our team will get back to you within 7 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}