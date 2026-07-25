"use client";

import ProcessTimeline from "@/components/common/ProcessTimeline";
import {
  FiSearch,
  FiPenTool,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiLifeBuoy,
} from "react-icons/fi";

const STEPS = [
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

export default function Process() {
  return (
    <ProcessTimeline
      steps={STEPS}
      badge="How We Work"
      title="Seven steps, one connected line from kickoff to launch."
      bgColor="bg-canvas"
    />
  );
}