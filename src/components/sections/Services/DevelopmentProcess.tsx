"use client";

import ProcessTimeline from "@/components/common/ProcessTimeline";
import {
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiRefreshCw,
} from "react-icons/fi";

const STEPS = [
  { step: "01", title: "Discovery", icon: FiSearch, desc: "Understanding your goals, users, and constraints." },
  { step: "02", title: "Planning", icon: FiClipboard, desc: "Scoping architecture, timeline, and milestones." },
  { step: "03", title: "UI/UX Design", icon: FiPenTool, desc: "Wireframes and high-fidelity interface design." },
  { step: "04", title: "Development", icon: FiCode, desc: "Building features in agile, reviewable sprints." },
  { step: "05", title: "Testing", icon: FiCheckCircle, desc: "Automated and manual QA before every release." },
  { step: "06", title: "Deployment", icon: FiUploadCloud, desc: "Zero-downtime rollout to production." },
  { step: "07", title: "Maintenance", icon: FiRefreshCw, desc: "Ongoing monitoring, support, and iteration." },
];

export default function DevelopmentProcess() {
  return (
    <ProcessTimeline
      steps={STEPS}
      badge="Our Process"
      title="A proven path from idea to production."
    />
  );
}