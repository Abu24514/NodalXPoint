import {
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiRefreshCw,
  FiLifeBuoy,
  FiAlertCircle,
  FiActivity,
  FiThumbsUp,
} from "react-icons/fi";
import { ProcessStep } from "@/types/service";

export const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    icon: FiSearch,
    desc: "Understanding your goals, users, and constraints.",
  },
  {
    step: "02",
    title: "Planning",
    icon: FiClipboard,
    desc: "Scoping architecture, timeline, and milestones.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    icon: FiPenTool,
    desc: "Wireframes and high-fidelity interface design.",
  },
  {
    step: "04",
    title: "Development",
    icon: FiCode,
    desc: "Building features in agile, reviewable sprints.",
  },
  {
    step: "05",
    title: "Testing",
    icon: FiCheckCircle,
    desc: "Automated and manual QA before every release.",
  },
  {
    step: "06",
    title: "Deployment",
    icon: FiUploadCloud,
    desc: "Zero-downtime rollout to production.",
  },
  {
    step: "07",
    title: "Maintenance",
    icon: FiRefreshCw,
    desc: "Ongoing monitoring, support, and iteration.",
  },
];

export const work: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Discovery",
    icon: FiSearch,
    desc: "Understanding business goals and project scope.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    icon: FiPenTool,
    desc: "Creating modern interfaces and prototypes.",
  },
  {
    step: "03",
    title: "Architecture Planning",
    icon: FiClipboard,
    desc: "Designing scalable software architecture.",
  },
  {
    step: "04",
    title: "Development",
    icon: FiCode,
    desc: "Building secure and optimized applications.",
  },
  {
    step: "05",
    title: "Testing & QA",
    icon: FiCheckCircle,
    desc: "Ensuring performance, security, and reliability.",
  },
  {
    step: "06",
    title: "Deployment",
    icon: FiUploadCloud,
    desc: "Launching applications on cloud infrastructure.",
  },
  {
    step: "07",
    title: "Maintenance",
    icon: FiRefreshCw,
    desc: "Continuous improvements and monitoring.",
  },
];

export const HProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    icon: FiSearch,
    desc: "We map your workflows, customers, and the systems already in place before proposing anything.",
  },
  {
    step: "02",
    title: "Plan",
    icon: FiClipboard,
    desc: "Scope, timeline, and milestones locked in so everyone knows what's being built and when.",
  },
  {
    step: "03",
    title: "Design",
    icon: FiPenTool,
    desc: "Wireframes and a visual direction you approve before a single line of production code is written.",
  },
  {
    step: "04",
    title: "Build",
    icon: FiCode,
    desc: "Two-week cycles with a working preview link every step, so nothing arrives as a surprise at the end.",
  },
  {
    step: "05",
    title: "Test",
    icon: FiCheckCircle,
    desc: "Automated and manual QA on every feature before it's ever considered done.",
  },
  {
    step: "06",
    title: "Launch",
    icon: FiUploadCloud,
    desc: "Migration, testing, and go-live handled on a schedule that fits your business, not ours.",
  },
  {
    step: "07",
    title: "Support",
    icon: FiLifeBuoy,
    desc: "A direct line to the team that built it — fixes and small changes without opening a new ticket queue.",
  },
];

export const Mflow:ProcessStep[] = [
  { step: "01", title: "Issue Report", icon: FiAlertCircle, desc: "Logged and triaged the moment it's raised." },
  { step: "02", title: "Analysis", icon: FiSearch, desc: "Root cause identified by our engineers." },
  { step: "03", title: "Fix Development", icon: FiCode, desc: "Solution built and code-reviewed." },
  { step: "04", title: "Testing", icon: FiCheckCircle, desc: "Validated across environments before release." },
  { step: "05", title: "Deployment", icon: FiUploadCloud, desc: "Shipped with zero-downtime rollout." },
  { step: "06", title: "Monitoring", icon: FiActivity, desc: "Tracked post-release for stability." },
  { step: "07", title: "Client Confirmation", icon: FiThumbsUp, desc: "Signed off with you, end to end." },
];