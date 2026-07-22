"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const PROJECT_TYPES = [
  "Web Development",
  "Mobile App",
  "CRM System",
  "SEO",
  "AI & ML",
  "Digital Marketing",
  "Something else",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: replace with a real API route or email service
    // (e.g. POST to /api/contact, or a service like Resend / Formspree).
    // This is intentionally left as a stub — no data is sent anywhere yet.
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
            placeholder="you@company.com"
            className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
          Company
        </label>
        <input
          type="text"
          name="company"
          placeholder="Optional"
          className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 placeholder:text-muted-ink/60 focus:border-node"
        />
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
          What do you need help with?
        </label>
        <select
          name="projectType"
          defaultValue=""
          required
          className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-body outline-none transition-colors duration-300 focus:border-node"
        >
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
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