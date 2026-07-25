"use client";

import { motion, Variants } from "framer-motion"; 
import { FiShield, FiZap } from "react-icons/fi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function QAAbout() {
  return (
    <motion.div 
      variants={fadeUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-3xl border border-white/50 bg-white/60 backdrop-blur-xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:bg-white/80 transition-colors duration-500"
    >
      <div className="absolute -top-10 -right-10 p-12 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
        <FiShield size={300} />
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 mb-6 border border-blue-200/50">
        <FiZap size={14} />
        <span>About The Service</span>
      </span>
      <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
        Building software you can <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">trust.</span>
      </h2>
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
        In today's digital landscape, a single critical bug or data breach can irrevocably damage a company's reputation and bottom line. Nodal X Point integrates rigorous Quality Assurance (QA) testing and advanced Cyber Security protocols directly into your software development lifecycle. We ensure your applications are not just highly performant and functionally flawless, but architecturally hardened against the evolving threat landscape.
      </p>
    </motion.div>
  );
}