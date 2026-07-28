export type Clause = {
  number: string;
  heading: string;
  body: string;
};

export type Policy = {
  id: string;
  label: string;
  summary: string;
  clauses: Clause[];
};

export const EFFECTIVE_DATE = "21 July 2026";
export const LAST_REVIEWED = "21 July 2026";

export const policies: Policy[] = [
  {
    id: "privacy",
    label: "Privacy Policy",
    summary:
      "Describes what personal data NodalXpoint Technologies Pvt. Ltd. (“NodalXpoint,” “we,” “us”) collects through this website and our services, why we collect it, and the rights available to you under applicable law, including India's Digital Personal Data Protection Act, 2023.",
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
        body: "We warrant that services will be performed with reasonable skill and care. Except as expressly stated, services are provided “as is” without further warranties, to the extent permitted by law.",
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