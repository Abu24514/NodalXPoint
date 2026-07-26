"use client";

import FAQ, { type FAQItem } from "@/components/common/FAQ";

const ABOUT_FAQS: FAQItem[] = [
  {
    q: "What does NodalXpoint actually do?",
    a: "We're a technology company specializing in web development, AI solutions, mobile applications, UI/UX design, and digital transformation for startups, businesses, and enterprises.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across a range of industries, building scalable, secure, and high-performance digital products tailored to each client's real business challenges.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. We partner with early-stage startups building their first product as well as established businesses and enterprises scaling existing systems.",
  },
  {
    q: "What happens after a project launches?",
    a: "We stay on as a long-term partner — offering ongoing maintenance, support, and iteration rather than handing off and disappearing.",
  },
  {
    q: "How is NodalXpoint different from other agencies?",
    a: "We combine a business-focused approach with a modern technology stack, transparent communication, and on-time delivery — measuring success by the outcomes we create, not hours logged.",
  },
];

export default function AboutFAQ() {
  return (
    <FAQ
      data={ABOUT_FAQS}
      badge="FAQ"
      title="Questions people"
      titleHighlight="ask us."
    />
  );
}