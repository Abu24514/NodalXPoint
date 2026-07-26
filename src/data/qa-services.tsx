import { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiTarget,
  FiUsers,
  FiCode,
  FiTerminal,
  FiLayers,
  FiRefreshCw,
  FiGitBranch,
  FiCloud,
  FiZap,
  FiShield,
  FiEye,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiSelenium,
  SiCypress,
  SiPostman,
  SiJest,
  SiGithubactions,
  SiJira,
  SiSwagger,
} from "react-icons/si";
import { QASubService, QASubServiceSlug } from "@/types/qa-service";

export const QA_SUB_SERVICES: Record<QASubServiceSlug, QASubService> = {
  "manual-testing": {
    title: "Manual Testing",
    tagline: "Hands-On Testing for Functional Accuracy",
    badge: "Functional QA",
    description:
      "Human-driven exploratory and functional testing that catches usability issues, edge cases, and visual defects automation typically misses.",
    overview:
      "Manual testing puts a real person in the loop — someone who notices the awkward tab order, the confusing error message, the button that's a pixel off on mobile. Automation is fast at repeating known scenarios, but it can't improvise. Our QA engineers manually walk through your application the way a real user would: exploring, questioning assumptions, and trying to break things creatively. It's slower per-cycle than automation, but it's how the subtlest — and often most damaging — issues get caught before launch.",
    whoItsFor: [
      "Teams shipping a new feature or full release for the first time",
      "Products with complex, judgment-heavy user flows (checkout, onboarding, forms)",
      "Anyone who needs a human sanity-check before a major launch",
    ],
    capabilities: [
      "Functional & UI Testing Across Devices",
      "Exploratory & Ad-Hoc Test Sessions",
      "Usability & Accessibility Checks",
      "Cross-Browser & Cross-Platform Validation",
    ],
    process: [
      { step: "01", title: "Requirement Walkthrough", desc: "Understanding user flows and acceptance criteria." },
      { step: "02", title: "Test Case Design", desc: "Writing detailed manual test cases for every scenario." },
      { step: "03", title: "Execution & Exploration", desc: "Running scripted and exploratory testing sessions." },
      { step: "04", title: "Bug Reporting & Retest", desc: "Logging defects with repro steps and verifying fixes." },
    ],
    tools: [
      { name: "Jira", icon: SiJira },
      { name: "TestRail", icon: FiTarget },
      { name: "BrowserStack", icon: FiSmartphone },
      { name: "Postman", icon: SiPostman },
    ],
    benefits: [
      { icon: FiEye, title: "Catches What Scripts Miss", desc: "Visual glitches, awkward flows, and edge cases no automated assertion checks for." },
      { icon: FiUsers, title: "Real User Perspective", desc: "Testing driven by human judgment, not a predefined script." },
      { icon: FiShield, title: "Pre-Launch Confidence", desc: "A final human pass before your release reaches real customers." },
    ],
  },
  "automation-testing": {
    title: "Automation Testing",
    tagline: "Automated Test Suites for Faster Releases",
    badge: "Test Automation",
    description:
      "Reusable, CI/CD-integrated automation suites that run on every build, cutting regression time and catching breakages before they ship.",
    overview:
      "Every time your team ships code, someone has to answer one question: did this break anything that used to work? Manually re-checking every flow on every release doesn't scale. We build automated test suites — using tools like Playwright, Cypress, and Selenium — that run against your application on every commit or deploy, so regressions get caught in minutes instead of days. The suites are written to be maintainable, not throwaway: reusable page objects, data-driven test cases, and clear failure reporting your team can actually act on.",
    whoItsFor: [
      "Teams shipping frequent releases who need fast, reliable regression coverage",
      "Products with a stable core that must never silently break",
      "Engineering teams wanting tests wired directly into their CI/CD pipeline",
    ],
    capabilities: [
      "Automated Regression Suites (Selenium/Playwright)",
      "CI/CD Pipeline Integration & Triggers",
      "Cross-Browser Automated Execution",
      "Data-Driven & Reusable Test Scripts",
    ],
    process: [
      { step: "01", title: "Framework Setup", desc: "Choosing the right automation stack for your app." },
      { step: "02", title: "Script Development", desc: "Building reusable, maintainable test scripts." },
      { step: "03", title: "CI/CD Wiring", desc: "Hooking suites into your pipeline for auto-runs." },
      { step: "04", title: "Maintenance & Scaling", desc: "Expanding coverage as new features ship." },
    ],
    tools: [
      { name: "Playwright", icon: FiCode },
      { name: "Cypress", icon: SiCypress },
      { name: "Selenium", icon: SiSelenium },
      { name: "Jest", icon: SiJest },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    benefits: [
      { icon: FiZap, title: "Faster Release Cycles", desc: "Regression checks that used to take days now run in minutes." },
      { icon: FiRefreshCw, title: "Consistent, Repeatable Results", desc: "The same test run exactly the same way, every single time." },
      { icon: FiGitBranch, title: "Built Into Your Pipeline", desc: "Tests trigger automatically on every commit or deployment." },
    ],
  },
  "api-testing": {
    title: "API Testing",
    tagline: "Reliable, Secure API Validation",
    badge: "API Quality",
    description:
      "Contract, functional, and security testing across REST and GraphQL endpoints to make sure your APIs behave correctly under real-world load.",
    overview:
      "Your API is the contract between your frontend, your mobile app, and every third party that integrates with you — if it breaks, everything downstream breaks with it. We test your endpoints directly: validating request/response schemas, checking authentication and permission boundaries, and confirming behavior under load. This catches issues that UI-level testing alone can miss, and it means your API stays reliable even as the frontend built on top of it changes.",
    whoItsFor: [
      "Products with a public or partner-facing API",
      "Teams running microservices where contracts between services matter",
      "Anyone who needs confidence in auth, rate-limiting, and error handling",
    ],
    capabilities: [
      "REST & GraphQL Contract Testing",
      "Request/Response Schema Validation",
      "Auth, Token & Permission Testing",
      "Load & Rate-Limit Verification",
    ],
    process: [
      { step: "01", title: "Endpoint Mapping", desc: "Cataloging endpoints, payloads, and auth requirements." },
      { step: "02", title: "Contract Test Design", desc: "Writing schema and response validation tests." },
      { step: "03", title: "Automated Execution", desc: "Running suites against staging on every deploy." },
      { step: "04", title: "Reporting & Sign-Off", desc: "Coverage reports and readiness confirmation." },
    ],
    tools: [
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "JMeter", icon: FiTerminal },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    benefits: [
      { icon: FiShield, title: "Secure By Default", desc: "Auth, tokens, and permission boundaries verified, not assumed." },
      { icon: FiLayers, title: "Contract-Safe Integrations", desc: "Confidence that frontend, mobile, and partner integrations won't break." },
      { icon: FiCloud, title: "Load-Tested Endpoints", desc: "Verified behavior under real-world traffic, not just happy-path calls." },
    ],
  },
};

// Small helper so pages don't reach into the record directly
export function getQASubService(slug: string) {
  return QA_SUB_SERVICES[slug as QASubServiceSlug];
}