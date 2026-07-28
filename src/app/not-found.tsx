"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-canvas px-6">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-node/10 blur-[140px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]  bg-size-[40px_40px]" />

      {/* Main Content */}
      <section className="relative z-10 max-w-2xl text-center">
        
        {/* Entrance Animation Wrapper for Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.1 }}
        >
          {/* Continuous Floating Animation */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-node/20 bg-node/10 backdrop-blur-lg shadow-lg"
          >
            <BiSearchAlt className="text-6xl text-node" />
          </motion.div>
        </motion.div>

        {/* 404 Text with added drop-shadow for better contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
          className="bg-linear-to-r from-white via-white to-node bg-clip-text text-8xl font-black tracking-tight text-transparent drop-shadow-md md:text-9xl"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.3 }}
          className="mt-6 text-3xl font-bold text-heading md:text-4xl"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.4 }}
          className="mx-auto mt-5 max-w-xl text-base leading-8 text-body/80"
        >
          The page you're looking for doesn't exist, may have been moved, or the
          URL is incorrect. Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-node px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(var(--node),0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--node),0.5)]"
            >
              <FiHome size={18} />
              Back to Home
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/5 px-6 py-3 font-semibold text-body transition-all duration-300 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <FiArrowLeft size={18} />
            Go Back
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}