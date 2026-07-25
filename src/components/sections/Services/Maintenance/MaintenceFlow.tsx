"use client";

import ProcessTimeline from "@/components/common/ProcessTimeline";
import {
  FiAlertCircle,
  FiSearch,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiActivity,
  FiThumbsUp,
} from "react-icons/fi";
const STEPS = [
  { step: "01", title: "Issue Report", icon: FiAlertCircle, desc: "Logged and triaged the moment it's raised." },
  { step: "02", title: "Analysis", icon: FiSearch, desc: "Root cause identified by our engineers." },
  { step: "03", title: "Fix Development", icon: FiCode, desc: "Solution built and code-reviewed." },
  { step: "04", title: "Testing", icon: FiCheckCircle, desc: "Validated across environments before release." },
  { step: "05", title: "Deployment", icon: FiUploadCloud, desc: "Shipped with zero-downtime rollout." },
  { step: "06", title: "Monitoring", icon: FiActivity, desc: "Tracked post-release for stability." },
  { step: "07", title: "Client Confirmation", icon: FiThumbsUp, desc: "Signed off with you, end to end." },
];

export default function MaintenanceFlow() {
  return (
    <ProcessTimeline
      steps={STEPS}
      badge="Issue Resolution"
      title="How we handle every issue."
    />
  );
}