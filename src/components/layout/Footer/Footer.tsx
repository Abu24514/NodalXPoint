import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const COLUMNS = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile Apps",
      "CRM Systems",
      "SEO",
      "AI & ML",
      "Digital Marketing",
    ],
  },
  {
    title: "Company",
    links: ["About", "Our Work", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-body">nodal</span>
              <span className="bg-linear-to-r from-node to-signal bg-clip-text text-transparent">
                X
              </span>
              <span className="text-body">point</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-ink">
              The nodal point where your business meets technology — web,
              mobile, CRM, SEO, AI, and marketing, connected.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[FaLinkedinIn, FaInstagram, FaXTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted-ink transition-colors duration-300 hover:border-node/40 hover:text-node"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-body/80 transition-colors duration-300 hover:text-node"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted-ink">
            &copy; {new Date().getFullYear()} nodalXpoint. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about/policies#privacy"
              className="text-xs text-muted-ink hover:text-node"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about/policies#terms"
              className="text-xs text-muted-ink hover:text-node"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
