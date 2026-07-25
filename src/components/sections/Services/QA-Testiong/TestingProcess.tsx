"use client";

import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const TESTING_PROCESS = [
  { step: "01", title: "Requirement Analysis", desc: "Understanding business goals, technical specs, and compliance needs." },
  { step: "02", title: "Test Planning", desc: "Defining testing scope, strategy, tools, and resource allocation." },
  { step: "03", title: "Test Case Design", desc: "Creating detailed manual test cases and automated scripts." },
  { step: "04", title: "Manual & Automation Testing", desc: "Executing test cycles across multiple environments and devices." },
  { step: "05", title: "Performance Validation", desc: "Conducting load, stress, and volume testing for scalability." },
  { step: "06", title: "Security Assessment", desc: "Performing vulnerability scans and penetration testing." },
  { step: "07", title: "Bug Reporting & Regression", desc: "Logging defects, re-testing fixes, and ensuring stability." },
  { step: "08", title: "Release Approval", desc: "Providing comprehensive metrics and quality sign-off." },
];

export default function TestingProcess() {
  return (
    <motion.div 
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="space-y-12 rounded-[2.5rem] bg-slate-900 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl"
    >
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-blue-500/20 rounded-full blur-[100px]"></div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Our 8-Step Testing Process</h2>
        <p className="mt-4 text-slate-400 text-lg">A structured, deterministic approach to ensuring software excellence from concept to production.</p>
      </div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {TESTING_PROCESS.map((step, idx) => (
          <motion.div key={idx} variants={fadeUp} className="group relative rounded-3xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 hover:bg-slate-800 transition-colors duration-300">
            <div className="text-5xl font-extrabold text-slate-700/40 absolute top-4 right-4 pointer-events-none group-hover:text-blue-500/20 transition-colors duration-500">
              {step.step}
            </div>
            <div className="h-2 w-12 bg-blue-500 rounded-full mb-6 group-hover:w-full transition-all duration-500"></div>
            <h4 className="font-bold text-lg text-white relative z-10">{step.title}</h4>
            <p className="mt-3 text-sm text-slate-400 relative z-10 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}