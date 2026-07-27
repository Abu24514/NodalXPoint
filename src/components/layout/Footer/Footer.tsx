import Link from "next/link";
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaXTwitter, 
  FaLocationDot, 
  FaEnvelope, 
  FaPhone 
} from "react-icons/fa6";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/software-development/web-app" },
      { label: "Mobile Apps", href: "/services/software-development/mobile-app" },
      { label: "UI/UX Design", href: "/services/software-development/ui-ux" },
      { label: "AI & ML", href: "/technology/ai-ml" },
      { label: "DevOps", href: "/technology/devops" }, 
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      // "Contact" link ko yahan se hata sakte hain agar aap chahein, abhi ke liye main isko rakha hai
      { label: "Contact", href: "/contact" }
    ],
  }
];

const SOCIALS = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/nodalxpoint/posts/?feedView=all",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/nodalxpoint?igsh=MTBweXIzMGt3Z3Y4Nw==",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/NodalXPoint",
    label: "X (Twitter)",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-body">nodal</span>
              <span className="bg-linear-to-r from-node to-signal bg-clip-text text-transparent">
                X
              </span>
              <span className="text-body">point</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-ink">
              The nodal point where your business meets technology — web,
              mobile, CRM, UI/UX, AI, and DevOps, connected.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted-ink transition-colors duration-300 hover:border-node/40 hover:text-node"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services aur Company Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body/80 transition-colors duration-300 hover:text-node"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Naya Contact Us Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-ink">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-body/80">
                <FaLocationDot className="mt-1 shrink-0 text-muted-ink" size={14} />
                <span>Delhi, India</span>
              </li>
              <li>
                <a
                  href="mailto:lesani@nodalxpoint.com"
                  className="flex items-center gap-3 text-sm text-body/80 transition-colors duration-300 hover:text-node"
                >
                  <FaEnvelope className="shrink-0 text-muted-ink" size={14} />
                  <span>lesani@nodalxpoint.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918430864255"
                  className="flex items-center gap-3 text-sm text-body/80 transition-colors duration-300 hover:text-node"
                >
                  <FaPhone className="shrink-0 text-muted-ink" size={14} />
                  <span>+91 84308 64255</span>
                </a>
              </li>
            </ul>
          </div>
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