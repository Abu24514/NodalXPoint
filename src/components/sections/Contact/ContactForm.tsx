"use client";

import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-10 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal/10 text-signal">
          <FiCheck size={22} />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-body">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-ink">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
        />
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us a bit about your project..."
          className="mt-2 w-full resize-none rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-node bg-node px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
        {!loading && (
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    </form>
  );
}