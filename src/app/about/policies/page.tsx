"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaPrint } from "react-icons/fa";

type Clause = {
  number: string;
  heading: string;
  body: string;
};

type Policy = {
  id: string;
  label: string;
  summary: string;
  clauses: Clause[];
};

const EFFECTIVE_DATE = "21 July 2026";
const LAST_REVIEWED = "21 July 2026";

const policies: Policy[] = [
  {
    id: "privacy",
    label: "Privacy Policy",
    summary:
      "Describes what personal data NodalXpoint Technologies Pvt. Ltd. (\u201cNodalXpoint,\u201d \u201cwe,\u201d \u201cus\u201d) collects through this website and our services, why we collect it, and the rights available to you under applicable law, including India's Digital Personal Data Protection Act, 2023.",
    clauses: [
      {
        number: "1.1",
        heading: "Scope",
        body: "This policy applies to visitors of nodalxpoint.com and to individuals whose data we process while scoping, delivering, or supporting a project.",
      },
      {
        number: "1.2",
        heading: "Information we collect",
        body: "Identity and contact data you submit through forms or email (name, company, email, phone); project data shared during scoping and delivery; and technical data collected automatically, such as IP address, browser type, device information, and pages visited.",
      },
      {
        number: "1.3",
        heading: "How we use it",
        body: "To respond to enquiries, prepare proposals, deliver and support contracted work, secure our systems, and improve this website. We do not use your data to train third-party models or sell it to data brokers.",
      },
      {
        number: "1.4",
        heading: "Legal basis for processing",
        body: "We process personal data on the basis of your consent, the performance of a contract with you, or our legitimate interest in operating and securing our business, consistent with the Digital Personal Data Protection Act, 2023.",
      },
      {
        number: "1.5",
        heading: "Sharing and disclosure",
        body: "We share data only with sub-processors engaged to deliver the service (hosting, email, project management, payment processing) under written confidentiality obligations, or where disclosure is required by law.",
      },
      {
        number: "1.6",
        heading: "Retention",
        body: "We retain enquiry and project data for as long as the relationship is active and for up to 7 years thereafter to meet contractual, accounting, and statutory obligations, after which it is securely deleted.",
      },
      {
        number: "1.7",
        heading: "Your rights",
        body: "You may request access to, correction of, or erasure of your personal data, and may withdraw consent at any time, by writing to privacy@nodalxpoint.com. We respond within 7 working days.",
      },
      {
        number: "1.8",
        heading: "Children's data",
        body: "Our services are directed at businesses and professionals. We do not knowingly collect personal data from individuals under 18.",
      },
      {
        number: "1.9",
        heading: "Changes to this policy",
        body: "We may update this policy to reflect changes in our practices or legal requirements. Material changes will be notified on this page with a revised effective date.",
      },
    ],
  },
  {
    id: "terms",
    label: "Terms of Service",
    summary:
      "Governs your use of nodalxpoint.com and forms the general framework under which NodalXpoint provides software development and consulting services, alongside any signed project agreement.",
    clauses: [
      {
        number: "2.1",
        heading: "Acceptance of terms",
        body: "By accessing this website or engaging NodalXpoint for services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the site and our services.",
      },
      {
        number: "2.2",
        heading: "Description of services",
        body: "NodalXpoint provides web, mobile, and software development, QA testing, cloud, and related technology consulting services, as further defined in individual project agreements.",
      },
      {
        number: "2.3",
        heading: "Order of precedence",
        body: "Where a signed proposal, statement of work, or contract exists for a project, its terms govern that engagement. These Terms apply to matters not otherwise addressed in that agreement.",
      },
      {
        number: "2.4",
        heading: "Client responsibilities",
        body: "You agree to provide timely feedback, accurate project requirements, and any access or content required for delivery. Delays in these may affect agreed timelines.",
      },
      {
        number: "2.5",
        heading: "Intellectual property",
        body: "On receipt of full payment, ownership of client-specific deliverables transfers to you as set out in the project agreement. Our proprietary frameworks, internal tools, and pre-existing code remain the property of NodalXpoint and are licensed, not sold, for use within the delivered product.",
      },
      {
        number: "2.6",
        heading: "Payment terms",
        body: "Invoices are payable within the timeframe stated in the project agreement, typically 15 days from issue. Late payments may accrue interest and can result in suspension of work.",
      },
      {
        number: "2.7",
        heading: "Confidentiality",
        body: "Both parties agree to keep confidential any non-public business, technical, or financial information disclosed during the engagement, and to use it solely for the purposes of the project.",
      },
      {
        number: "2.8",
        heading: "Warranties and disclaimers",
        body: "We warrant that services will be performed with reasonable skill and care. Except as expressly stated, services are provided \u201cas is\u201d without further warranties, to the extent permitted by law.",
      },
      {
        number: "2.9",
        heading: "Limitation of liability",
        body: "To the extent permitted by law, NodalXpoint's aggregate liability arising from an engagement is limited to the fees paid for the specific service giving rise to the claim, excluding indirect or consequential losses.",
      },
      {
        number: "2.10",
        heading: "Termination",
        body: "Either party may terminate an engagement in accordance with the notice period specified in the project agreement. Fees for work completed up to termination remain payable.",
      },
      {
        number: "2.11",
        heading: "Governing law and jurisdiction",
        body: "These Terms are governed by the laws of India. Disputes arising from these Terms or a project agreement are subject to the exclusive jurisdiction of the courts of Delhi, India.",
      },
      {
        number: "2.12",
        heading: "Changes to these terms",
        body: "We may revise these Terms from time to time. Continued use of our website or services after changes take effect constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    id: "cookies",
    label: "Cookie Policy",
    summary:
      "Explains what cookies and similar technologies this website uses, and how you can control them.",
    clauses: [
      {
        number: "3.1",
        heading: "What cookies are",
        body: "Cookies are small text files stored on your device that let a website remember information about your visit.",
      },
      {
        number: "3.2",
        heading: "Essential cookies",
        body: "Required for the site to function correctly, such as remembering session state and security preferences. These cannot be disabled without affecting core functionality.",
      },
      {
        number: "3.3",
        heading: "Analytics cookies",
        body: "Help us understand aggregated, anonymised visitor behaviour, such as which pages are viewed most often, so we can improve the site.",
      },
      {
        number: "3.4",
        heading: "Third-party cookies",
        body: "Certain embedded content or analytics providers may set their own cookies, governed by their respective privacy policies.",
      },
      {
        number: "3.5",
        heading: "Managing your preferences",
        body: "You can block or delete cookies at any time through your browser settings. Doing so will not prevent you from browsing the site, though some features may not function as intended.",
      },
    ],
  },
  {
    id: "data-security",
    label: "Data Protection & Security",
    summary:
      "Sets out the technical and organisational measures NodalXpoint applies to protect client data and code across every engagement.",
    clauses: [
      {
        number: "4.1",
        heading: "Encryption",
        body: "Data in transit is encrypted using TLS. Data at rest, including credentials and repositories, is stored on encrypted infrastructure.",
      },
      {
        number: "4.2",
        heading: "Access control",
        body: "Access to a project's repositories, credentials, and documents is limited to team members actively assigned to it and is revoked immediately on project completion or role change.",
      },
      {
        number: "4.3",
        heading: "Sub-processors",
        body: "We use vetted third-party providers for hosting, version control, and communication. A current list of sub-processors is available on request.",
      },
      {
        number: "4.4",
        heading: "International transfers",
        body: "Where data is processed outside India by a sub-processor, we require contractual safeguards consistent with applicable data protection law.",
      },
      {
        number: "4.5",
        heading: "Breach notification",
        body: "If a security incident affects your project data, we will notify you within 48 hours of confirming the incident, along with the nature of the breach and remedial steps taken.",
      },
    ],
  },
  {
    id: "refunds",
    label: "Refund & Cancellation",
    summary:
      "Sets out how advances, milestone payments, and cancellations are handled on paid engagements.",
    clauses: [
      {
        number: "5.1",
        heading: "Advance payments",
        body: "An advance secures your project slot on our delivery calendar. Advances are non-refundable once work has commenced, unless otherwise agreed in writing.",
      },
      {
        number: "5.2",
        heading: "Milestone billing",
        body: "Projects are typically billed against agreed milestones. Each milestone is invoiced on delivery of the corresponding scope.",
      },
      {
        number: "5.3",
        heading: "Cancellation by client",
        body: "You may cancel a project with written notice as specified in your agreement. Any unused, already-paid milestone budget is refunded within 14 working days, less costs for work completed.",
      },
      {
        number: "5.4",
        heading: "Cancellation by NodalXpoint",
        body: "If we are unable to continue an engagement, we will refund fees for undelivered scope and hand over all work completed to date.",
      },
      {
        number: "5.5",
        heading: "Non-refundable items",
        body: "Third-party costs already incurred on your behalf, such as domain, hosting, or licence purchases, are non-refundable.",
      },
    ],
  },
];

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
      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
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
          Legal &amp; Trust
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
                  href="mailto:legal@nodalxpoint.com"
                  className="font-medium text-node"
                >
                  legal@nodalxpoint.com
                </a>{" "}
                and our team will get back to you within 7 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}